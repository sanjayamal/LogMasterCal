import type { ReactNode } from "react";
import "./AppShell.css";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="app">
      <div className="screen active">{children}</div>
    </div>
  );
}
