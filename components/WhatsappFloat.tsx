"use client";

import { useEffect, useState } from "react";
import { Icon } from "./ui/Icons";
import { whatsappLink } from "@/data/site";

export default function WhatsappFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink()}
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] transition-all duration-300 hover:brightness-105 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <Icon name="whatsapp" className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:inline">Fale conosco</span>
    </a>
  );
}
