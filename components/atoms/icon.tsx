
import type { CSSProperties } from "react";

interface IconProps {
  name:
    | "home"
    | "search"
    | "location"
    | "menu"
    | "arrow-right"
    | "arrow-up"
    | "close"
    | "phone"
    | "email"
    | "camera"
    | "heart"
    | "info";
  size?: number;
  color?: string;
  className?: string;
  label?: string;
}

const iconSymbols: Record<IconProps["name"], string> = {
  home: "⌂",
  search: "⌕",
  location: "📍",
  menu: "☰",
  "arrow-right": "→",
  "arrow-up": "↑",
  close: "×",
  phone: "☎",
  email: "✉",
  camera: "▣",
  heart: "♡",
  info: "ⓘ",
};

export default function Icon({
  name,
  size = 24,
  color = "currentColor",
  className = "",
  label,
}: IconProps) {
  const styles: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: size,
    height: size,
    fontSize: size,
    lineHeight: 1,
    color,
    flexShrink: 0,
  };

  return (
    <span
      className={className}
      style={styles}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {iconSymbols[name]}
    </span>
  );
}
