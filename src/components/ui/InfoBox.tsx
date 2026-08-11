import type { ReactNode } from "react";
import "./InfoBox.css";

interface InfoBoxProps {
  variant: "tip" | "rule";
  children: ReactNode;
  style?: React.CSSProperties;
}

export default function InfoBox({ variant, children, style }: InfoBoxProps) {
  return (
    <div className={variant === "tip" ? "tip-box" : "rule-box"} style={style}>
      <p>{children}</p>
    </div>
  );
}
