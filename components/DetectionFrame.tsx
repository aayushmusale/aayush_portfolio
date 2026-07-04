import { ReactNode } from "react";

export default function DetectionFrame({
  children,
  label,
  confidence,
  className = "",
}: {
  children: ReactNode;
  label?: string;
  confidence?: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <span className="frame-corner top-0 left-0 border-t-2 border-l-2" />
      <span className="frame-corner top-0 right-0 border-t-2 border-r-2" />
      <span className="frame-corner bottom-0 left-0 border-b-2 border-l-2" />
      <span className="frame-corner bottom-0 right-0 border-b-2 border-r-2" />
      {label && (
        <span className="absolute -top-3 left-3 bg-signal text-ink text-[10px] font-mono font-medium px-1.5 py-0.5 tracking-wide">
          {label}
          {confidence ? ` · ${confidence}` : ""}
        </span>
      )}
      {children}
    </div>
  );
}
