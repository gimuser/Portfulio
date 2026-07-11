"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedRoles({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      return;
    }
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [reduceMotion, roles.length]);

  if (reduceMotion) {
    return <span className="role-pill">{roles[0]}</span>;
  }

  return <span className="role-pill" aria-live="polite">{roles[index]}</span>;
}
