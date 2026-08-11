import { useState } from "react";
import { IconX, IconPercentage, IconCpu } from "@tabler/icons-react";
import Header from "../components/layout/Header";
import BottomNav from "../components/layout/BottomNav";
import Card from "../components/ui/Card";
import { Step, MathAnswer } from "../components/ui/Step";
import PrimaryButton from "../components/ui/PrimaryButton";
import { solveLog, type SolverOperation, type SolverResult } from "../utils/logSolver";
import "./Solver.css";

export default function Solver() {
  const [numA, setNumA] = useState("");
  const [numB, setNumB] = useState("");
  const [operation, setOperation] = useState<SolverOperation>("×");
  const [result, setResult] = useState<SolverResult | null>(null);
  const [error, setError] = useState("");

  const handleSolve = () => {
    const a = parseFloat(numA);
    const b = parseFloat(numB);

    if (Number.isNaN(a) || Number.isNaN(b) || a <= 0 || b <= 0) {
      setError("Please enter positive values higher than zero.");
      setResult(null);
      return;
    }

    setError("");
    setResult(solveLog(a, b, operation));
  };

  return (
    <>
      <Header title="Log Solver" backTo="/" />
      <div className="content">
        <Card variant="blue">
          <p className="subtitle">Enter positive values and tap operation to process equations step by step via log laws.</p>
        </Card>

        <Card>
          <div className="label">Number A</div>
          <input
            type="number"
            step="any"
            placeholder="e.g. 43.85"
            value={numA}
            onChange={(e) => setNumA(e.target.value)}
          />

          <div className="label" style={{ marginTop: 14 }}>Operation</div>
          <div className="op-grid">
            <button
              className={`op-btn${operation === "×" ? " active" : ""}`}
              onClick={() => setOperation("×")}
            >
              <IconX size={16} /> Multiply
            </button>
            <button
              className={`op-btn${operation === "÷" ? " active" : ""}`}
              onClick={() => setOperation("÷")}
            >
              <IconPercentage size={16} /> Divide
            </button>
          </div>

          <div className="label">Number B</div>
          <input
            type="number"
            step="any"
            placeholder="e.g. 0.7532"
            value={numB}
            onChange={(e) => setNumB(e.target.value)}
          />

          {error && (
            <p style={{ color: "#dc2626", fontSize: 12.5, fontWeight: 500, marginTop: 10 }}>{error}</p>
          )}

          <PrimaryButton onClick={handleSolve} style={{ marginTop: 18 }}>
            Compute Solution <IconCpu size={18} />
          </PrimaryButton>
        </Card>

        {result && (
          <Card variant="blue" style={{ marginTop: 4 }}>
            <div className="title">Step-by-Step Solution</div>
            <Step>
              Expression: <span>P = {result.a} {result.opSymbol} {result.b}</span>
            </Step>
            <Step>
              Log Transform: <span>lg P = lg({result.a} {result.opSymbol} {result.b})</span>
            </Step>
            <Step>
              Apply Law {result.lawNumber}: <small>{result.law}</small>
            </Step>
            <Step>
              Expand parameters: <span>lg P = lg {result.a} {result.lawSymbol} lg {result.b}</span>
            </Step>
            <Step>
              Table values mapped: <span>lg P = {result.lgA.toFixed(4)} {result.lawSymbol} {result.lgB.toFixed(4)}</span>
            </Step>
            <Step>
              Sum evaluation: <span>lg P = {result.lgResult.toFixed(4)}</span>
            </Step>
            <Step>
              Antilog Result: <br />
              <MathAnswer>P = antilog({result.lgResult.toFixed(4)}) = {result.result.toFixed(4)}</MathAnswer>
            </Step>
          </Card>
        )}
      </div>
      <BottomNav />
    </>
  );
}
