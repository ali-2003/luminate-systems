"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/orbit-scene"), { ssr: false });

export function HeroOrbit() { return <Scene />; }
