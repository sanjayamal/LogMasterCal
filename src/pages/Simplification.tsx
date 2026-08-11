import { IconCalculator } from "@tabler/icons-react";
import Header from "../components/layout/Header";
import Card from "../components/ui/Card";
import { Step, MathAnswer } from "../components/ui/Step";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function Simplification() {
  return (
    <>
      <Header title="Simplification" backTo="/" />
      <div className="content">
        <Card variant="teal">
          <p className="label">Primary Laws Assigned</p>
          <Step>
            <span>logₐ(PQ) = logₐP + logₐQ</span>
          </Step>
          <Step>
            <span>logₐ(P/Q) = logₐP − logₐQ</span>
          </Step>
        </Card>

        <Card variant="blue">
          <div className="title">Worked Example</div>
          <div className="label">Evaluate: 43.85 × 0.7532</div>
          <Step>
            Let: <span>P = 43.85 × 0.7532</span>
          </Step>
          <Step>
            Take log: <span>lg P = lg(43.85 × 0.7532)</span>
          </Step>
          <Step>
            Apply Law 3: <span>lg P = lg 43.85 + lg 0.7532</span>
          </Step>
          <Step>
            Table values: <span>lg P = 1.6420 + 1̄.8769</span>
          </Step>
          <Step>
            Final: <br />
            <MathAnswer>lg P = 1.5189</MathAnswer>
          </Step>
        </Card>

        <PrimaryButton to="/solver">
          Try Interactive Solver <IconCalculator size={18} />
        </PrimaryButton>
      </div>
    </>
  );
}
