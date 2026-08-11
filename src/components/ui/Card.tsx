import type { ReactNode } from "react";
import type { ThemeVariant } from "../../types";
import "./Card.css";

interface CardProps {
  variant?: ThemeVariant;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Card({ variant = "default", children, className = "", style }: CardProps) {
  const variantClass = variant !== "default" ? ` card-${variant}` : "";
  return (
    <div className={`card${variantClass} ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
