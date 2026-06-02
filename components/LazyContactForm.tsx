"use client";

import { useEffect, useRef, useState } from "react";

export default function LazyContactForm() {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="bg-white rounded-2xl overflow-hidden" style={{ minHeight: "850px" }}>
      {loaded ? (
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/vLGgFnxHdlG1JLKDnAwu"
          style={{ width: "100%", height: "850px", border: "none", borderRadius: "3px" }}
          id="inline-vLGgFnxHdlG1JLKDnAwu"
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Website Contact Form - Services Options"
          data-height="850"
          data-layout-iframe-id="inline-vLGgFnxHdlG1JLKDnAwu"
          data-form-id="vLGgFnxHdlG1JLKDnAwu"
          title="Website Contact Form - Services Options"
        />
      ) : (
        <div
          className="flex items-center justify-center h-full min-h-[850px] bg-surface rounded-2xl"
          aria-label="Contact form loading"
          aria-busy="true"
        >
          <div className="text-center space-y-3">
            <div className="w-8 h-8 border-2 border-teal-dark border-t-transparent rounded-full animate-spin mx-auto" aria-hidden="true" />
            <p className="text-ink-muted text-sm">Loading form…</p>
          </div>
        </div>
      )}
    </div>
  );
}
