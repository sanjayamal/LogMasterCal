import type { ReactNode } from "react";
import "./Badge.css";

interface BadgeProps {
  children: ReactNode;
  color?: "blue" | "green" | "amber";
}

export default function Badge({ children, color = "blue" }: BadgeProps) {
  return <div className={`badge badge-${color}`}>{children}</div>;
}
