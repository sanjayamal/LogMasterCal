import type { ReactNode } from "react";
import "./MathElements.css";

export function Step({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
  return (
    <div className="step" style={style}>
      {children}
    </div>
  );
}

export function MathAnswer({ children }: { children: ReactNode }) {
  return <span className="math-answer">{children}</span>;
}
