interface BrandLogoProps {
  className?: string;
  tone?: "dark" | "light";
  variant?: "full" | "icon";
}

export function BrandLogo({
  className = "",
  tone = "dark",
  variant = "full",
}: BrandLogoProps) {
  const panel = tone === "light" ? "#123B33" : "#17483A";
  const textColor = panel;
  const accent = "#65C66A";

  if (variant === "icon") {
    return (
      <div className={`inline-flex ${className}`.trim()}>
        <svg viewBox="0 0 64 64" className="h-10 w-10" role="img" aria-label="JH Transfers icon logo">
          <text x="18" y="41" fontSize="28" fontWeight="800" fill={textColor} letterSpacing="0.5">
            J
          </text>
          <text x="31" y="41" fontSize="28" fontWeight="800" fill={textColor} letterSpacing="0.5">
            H
          </text>
          <circle cx="47.5" cy="26" r="3" fill={accent} />
        </svg>
      </div>
    );
  }

  return (
    <div className={`inline-flex ${className}`.trim()}>
      <svg
        viewBox="0 0 430 100"
        className="h-10 w-[210px] sm:h-14 sm:w-[300px]"
        role="img"
        aria-label="JH Transfers logo"
      >
        <text x="28" y="66" fontSize="74" fontWeight="800" fill={textColor} letterSpacing="0.5">
          JH
        </text>

        <circle cx="136" cy="43" r="4.5" fill={accent} />

        <text x="148" y="50" fontSize="38" fontWeight="500" fill={textColor} letterSpacing="4.5">
          TRANSFERS
        </text>
        <text x="148" y="71" fontSize="14" fontWeight="600" fill={accent} letterSpacing="4.2">
          AIRPORT • CITY • MOBILITY
        </text>
      </svg>
    </div>
  );
}
