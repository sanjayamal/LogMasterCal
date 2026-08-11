import { IconArrowRight } from "@tabler/icons-react";
import Header from "../../components/layout/Header";
import Card from "../../components/ui/Card";
import FormulaBox from "../../components/ui/FormulaBox";
import { Step } from "../../components/ui/Step";
import Badge from "../../components/ui/Badge";
import PrimaryButton from "../../components/ui/PrimaryButton";

export default function LogLaws34() {
  return (
    <>
      <Header title="Logarithms: Laws 3 & 4" backTo="/logarithms/laws-1-2" />
      <div className="content">
        <Card variant="blue">
          <Badge>Third Law</Badge>
          <div className="title">Product Rule (Multiplication)</div>
          <FormulaBox formula="logₐ(m × n) = logₐm + logₐn" />
          <div className="label" style={{ marginTop: 8 }}>Example</div>
          <Step>
            <span>lg(2.32 × 1.78) = lg(2.32) + lg(1.78)</span>
          </Step>
          <Step>
            <span>= 0.365 + 0.250 = 0.615</span>
          </Step>
        </Card>

        <Card variant="purple">
          <Badge>Fourth Law</Badge>
          <div className="title">Quotient Rule (Division)</div>
          <FormulaBox formula="logₐ(m/n) = logₐm − logₐn" />
          <div className="label" style={{ marginTop: 8 }}>Example</div>
          <Step>
            <span>lg(7.3/2.1) = lg(7.3) − lg(2.1)</span>
          </Step>
          <Step>
            <span>= 0.863 − 0.322 = 0.541</span>
          </Step>
        </Card>

        <PrimaryButton to="/logarithms/bar-operations">
          Next: Bar Notation Ops <IconArrowRight size={18} />
        </PrimaryButton>
      </div>
    </>
  );
}
