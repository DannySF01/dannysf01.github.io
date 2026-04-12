import React from "react";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 min-h-screen flex items-center justify-center snap-start w-full bg-transparent ${className}`}
    >
      <div className="w-full max-w-6xl px-6 md:px-12 lg:px-24">{children}</div>
    </section>
  );
}
