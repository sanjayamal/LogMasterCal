import "./Stats.css";

export function SectionTitle({ children }: { children: string }) {
  return <p className="section-title">{children}</p>;
}

export function StatCard({ num, label }: { num: string; label: string }) {
  return (
    <div className="stat-card">
      <div className="num">{num}</div>
      <div className="lbl">{label}</div>
    </div>
  );
}

export function ProgressBar({ percent }: { percent: number }) {
  return (
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${percent}%` }} />
    </div>
  );
}
