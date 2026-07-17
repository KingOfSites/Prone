import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline" | "white";

const styles: Record<Variant, string> = {
  primary:
    "brand-gradient text-white shadow-[0_16px_40px_-16px_rgba(233,78,27,0.7)] hover:brightness-110",
  outline:
    "border border-graphite/30 text-ink-800 hover:border-orange hover:text-orange bg-transparent",
  ghost: "text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15",
  white: "bg-white text-ink-800 hover:bg-paper-100",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "className">) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold font-display tracking-tight transition-all duration-300 active:scale-[0.98] ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
