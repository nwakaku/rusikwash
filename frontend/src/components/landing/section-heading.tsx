import clsx from "clsx";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={clsx("mx-auto max-w-2xl text-center", className)}>
      {eyebrow ? (
        <p
          className={clsx(
            "mb-3 text-xs font-semibold uppercase tracking-[0.22em]",
            light ? "text-[#FFD21A]" : "text-[#02A2D7]",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={clsx(
          "text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]",
          light ? "text-white" : "text-[#161B1C]",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={clsx(
            "mt-4 text-base leading-7",
            light ? "text-white/75" : "text-[#667579]",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
