
import type { ReactNode, CSSProperties } from "react";

interface TypographyProps {
  children: ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "caption";
  color?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export default function Typography({
  children,
  variant = "body",
  color = "#26352E",
  className = "",
  align = "left",
}: TypographyProps) {
  const styles: Record<string, CSSProperties> = {
    h1: {
      fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
      fontWeight: 800,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "clamp(2rem, 5vw, 2.75rem)",
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "clamp(1.5rem, 4vw, 2rem)",
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.8,
    },
    caption: {
      fontSize: "0.8125rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
  };

  const Tag = (
    ["h1", "h2", "h3", "h4"].includes(variant)
      ? variant
      : "p"
  ) as "h1" | "h2" | "h3" | "h4" | "p";

  return (
    <Tag
      className={className}
      style={{
        ...styles[variant],
        color,
        textAlign: align,
        margin: 0,
      }}
    >
      {children}
    </Tag>
  );
}
