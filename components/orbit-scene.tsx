"use client";

import { useFrame, Canvas, type ThreeEvent } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";

function Machinery() {
  const group = useRef<THREE.Group>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const core = useRef<THREE.Mesh>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (!group.current || !ring1.current || !ring2.current || !core.current) return;
    const t = state.clock.elapsedTime;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isReduced) {
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, pointer.current.x * 0.28 + Math.sin(t * 0.22) * 0.2, 2.5, delta);
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -pointer.current.y * 0.2 + Math.sin(t * 0.18) * 0.1, 2.5, delta);
      ring1.current.rotation.z += delta * (hovered ? 0.14 : 0.06);
      ring2.current.rotation.y += delta * (hovered ? -0.14 : -0.045);
      core.current.rotation.x += delta * 0.11;
      core.current.rotation.y += delta * 0.08;
      group.current.position.y = Math.sin(t * 0.8) * 0.11;
    }
  });

  function onPointerMove(e: ThreeEvent<PointerEvent>) {
    pointer.current.x = e.point.x / 5;
    pointer.current.y = e.point.y / 5;
  }

  return <group ref={group} scale={0.87} onPointerMove={onPointerMove} onPointerOver={() => setHovered(true)} onPointerOut={() => { setHovered(false); pointer.current = { x: 0, y: 0 }; }}>
    <mesh ref={ring1} rotation={[0.5, 0.3, 0.9]}>
      <torusGeometry args={[2.16, 0.17, 28, 160]} />
      <meshPhysicalMaterial color="#73ABFF" metalness={0.72} roughness={0.21} clearcoat={1} clearcoatRoughness={0.14} />
    </mesh>
    <mesh ref={ring2} rotation={[1.2, 0.4, -0.5]}>
      <torusGeometry args={[1.72, 0.38, 44, 130]} />
      <meshPhysicalMaterial color="#A7B9D6" metalness={0.98} roughness={0.24} clearcoat={0.8} />
    </mesh>
    <mesh ref={core} rotation={[0.1, 0.6, 0.1]}>
      <icosahedronGeometry args={[1.33, 5]} />
      <meshPhysicalMaterial color="#0E1B33" metalness={0.87} roughness={0.18} clearcoat={1} flatShading={true} />
    </mesh>
    <mesh rotation={[0.1, 0.6, 0.1]}>
      <icosahedronGeometry args={[1.35, 2]} />
      <meshBasicMaterial color="#3B82F6" wireframe opacity={0.22} transparent />
    </mesh>
    <mesh rotation={[0, 0.4, 0]}>
      <torusGeometry args={[2.65, 0.006, 4, 150]} />
      <meshBasicMaterial color="#91BFFF" transparent opacity={0.36} />
    </mesh>
    <mesh rotation={[1.1, 1.1, 0.7]}>
      <torusGeometry args={[2.72, 0.006, 4, 150]} />
      <meshBasicMaterial color="#91BFFF" transparent opacity={0.2} />
    </mesh>
  </group>;
}

export default function OrbitScene() {
  const wrapper = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(true);
  const [webgl, setWebgl] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("webgl2") || canvas.getContext("webgl");
      setWebgl(Boolean(context));
    } catch { setWebgl(false); }
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: "120px" });
    if (wrapper.current) observer.observe(wrapper.current);
    return () => observer.disconnect();
  }, []);

  return <div className="orbit-canvas-wrap" ref={wrapper}>
    <div className={`orbit-fallback ${ready && webgl ? "is-hidden" : ""}`} aria-hidden="true"><span className="fallback-ring fallback-ring-a"/><span className="fallback-ring fallback-ring-b"/><span className="fallback-core" /></div>
    {webgl && <div className={`orbit-webgl ${ready ? "is-ready" : ""}`}>
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8.4], fov: 42 }} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }} frameloop={visible ? "always" : "never"} onCreated={() => setReady(true)}>
        <ambientLight intensity={1.15} />
        <directionalLight position={[5, 5, 5]} intensity={3.4} color="#FFFFFF" />
        <pointLight position={[-4, -3, 3]} intensity={60} color="#5B9CFF" />
        <pointLight position={[0, 4, -5]} intensity={90} color="#2F60B5" />
        <Suspense fallback={null}><Machinery /></Suspense>
      </Canvas>
    </div>}
  </div>;
}
