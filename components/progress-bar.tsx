"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const steps = [
  { path: "/", label: "Welcome" },
  { path: "/countdown", label: "Birthday Note" },
  { path: "/gallery", label: "Memories" },
  { path: "/timeline", label: "Our Story" },
  { path: "/quiz", label: "Cute Quiz" },
  { path: "/notes", label: "Hidden Notes" },
  { path: "/reveal", label: "Final Reveal" },
];

export default function ProgressBar() {
  const pathname = usePathname();

  const currentIndex = steps.findIndex((step) => step.path === pathname);
  const safeIndex = currentIndex === -1 ? 0 : currentIndex;
  const progress = ((safeIndex + 1) / steps.length) * 100;

  return (
    <div className="sticky top-0 z-40 border-b border-[#f1dede] bg-white/75 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="mb-2 flex items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.25em] text-[#b07a7a]">
            Chapter {safeIndex + 1} of {steps.length}
          </p>
          <p className="text-sm text-[#7a5c5c]">{steps[safeIndex]?.label}</p>
        </div>

        <div className="h-2 w-full overflow-hidden rounded-full bg-[#f7e7e7]">
          <div
            className="h-full rounded-full bg-[#e7bcbc] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 overflow-x-auto pb-1 md:overflow-visible">
          {steps.map((step, index) => {
            const isActive = index === safeIndex;

            return (
              <Link
                key={step.path}
                href={step.path}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs transition duration-300 ${
                  isActive
                    ? "bg-[#e7bcbc] text-[#4a2f2f] shadow-sm"
                    : "bg-[#fff7f7] text-[#7a5c5c] hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
                }`}
              >
                {step.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}