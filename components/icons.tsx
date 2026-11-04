import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

export function ArrowUpRight({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5 19 19 5M7 5h12v12" />
    </svg>
  );
}

export function ArrowRight({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  );
}

export function Asterisk({ size = 30, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path d="M24 2.5v43M2.5 24h43M8.8 8.8l30.4 30.4M39.2 8.8 8.8 39.2" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" />
      <circle cx="24" cy="24" r="5.5" fill="currentColor" />
    </svg>
  );
}

export function Mark({ size = 38, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 42 42" fill="none" aria-hidden="true" {...props}>
      <path d="M6 6v30h30" stroke="currentColor" strokeWidth="5.5" strokeLinecap="square" />
      <path d="m13 27 14-14M27 13v12M27 13H15" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
    </svg>
  );
}

export function Minus({ size = 24, ...props }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" {...props}><path d="M3 12h18" /></svg>;
}

export function Plus({ size = 24, ...props }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" {...props}><path d="M3 12h18M12 3v18" /></svg>;
}
