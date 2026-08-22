import { useEffect, useState } from "react";
import { useReveal } from "../hooks/useReveal";

export default function CountUp({ to, prefix = "", suffix = "", duration = 1200 }: { to: number; prefix?: string; suffix?: string; duration?: number }) {
  const { ref, visible } = useReveal<HTMLSpanElement>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(to * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString("es-PE")}
      {suffix}
    </span>
  );
}
