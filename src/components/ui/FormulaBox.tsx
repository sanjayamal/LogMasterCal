import "./MathElements.css";

interface FormulaBoxProps {
  formula: string;
  style?: React.CSSProperties;
}

export default function FormulaBox({ formula, style }: FormulaBoxProps) {
  return (
    <div className="formula-box" style={style}>
      <span>{formula}</span>
    </div>
  );
}
