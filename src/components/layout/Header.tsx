import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

interface HeaderProps {
  title: string;
  backTo: string;
}

export default function Header({ title, backTo }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="header">
      <button className="back" onClick={() => navigate(backTo)} aria-label="Go back">
        <IconArrowLeft size={20} />
      </button>
      <h1>{title}</h1>
      <div className="spacer" />
    </div>
  );
}
