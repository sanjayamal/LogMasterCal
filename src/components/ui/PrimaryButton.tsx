import type { ReactNode, MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import "./PrimaryButton.css";

interface PrimaryButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
}

export default function PrimaryButton({ children, to, onClick, style }: PrimaryButtonProps) {
  const navigate = useNavigate();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(e);
    if (to) navigate(to);
  };

  return (
    <button className="btn-primary" onClick={handleClick} style={style}>
      {children}
    </button>
  );
}
