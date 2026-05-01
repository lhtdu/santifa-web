"use client";

import { useEffect, useRef } from "react";

export default function ScrollSmootherProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { ScrollSmoother } = await import("gsap/ScrollSmoother");

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      const existing = document.getElementById("smooth-wrapper");
      if (existing) existing.remove();

      const wrapper = document.createElement("div");
      wrapper.id = "smooth-wrapper";
      const content = document.createElement("div");
      content.id = "smooth-content";

      document.body.appendChild(wrapper);
      wrapper.appendChild(content);

      const mainContent = document.querySelector("main");
      if (mainContent) {
        while (mainContent.firstChild) {
          content.appendChild(mainContent.firstChild);
        }
        mainContent.remove();
      }

      ScrollSmoother.create({
        wrapper: wrapper,
        content: content,
        smooth: 0.8,
        effects: true,
        normalizeScroll: true,
      });

      ScrollTrigger.refresh();
    };

    init();
  }, []);

  return (
    <>
      <main id="smooth-content">{children}</main>
    </>
  );
}
