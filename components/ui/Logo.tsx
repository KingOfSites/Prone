import Image from "next/image";

export default function Logo({
  variant = "dark",
  className = "",
  priority = false,
}: {
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
}) {
  const src = variant === "light" ? "/brand/logo-white.svg" : "/brand/logo-full.svg";
  return (
    <Image
      src={src}
      alt="PRONE Associação Mutualista"
      width={174}
      height={120}
      priority={priority}
      className={className}
    />
  );
}
