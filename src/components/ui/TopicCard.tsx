import type { ComponentType } from "react";
import { IconChevronRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import type { IconVariant } from "../../types";
import "./TopicCard.css";
import "./Card.css";

interface TopicCardProps {
  to: string;
  icon: ComponentType<{ size?: number }>;
  iconVariant: IconVariant;
  title: string;
  subtitle: string;
}

export default function TopicCard({ to, icon: Icon, iconVariant, title, subtitle }: TopicCardProps) {
  const navigate = useNavigate();

  return (
    <div className="topic-card" onClick={() => navigate(to)}>
      <div className={`icon icon-${iconVariant}`}>
        <Icon size={22} />
      </div>
      <div style={{ flex: 1 }}>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
      <IconChevronRight size={18} className="chevron" />
    </div>
  );
}
