import Header from "../../components/layout/Header";
import Card from "../../components/ui/Card";
import FormulaBox from "../../components/ui/FormulaBox";
import { Step } from "../../components/ui/Step";
import Badge from "../../components/ui/Badge";
import PrimaryButton from "../../components/ui/PrimaryButton";
import { IconArrowRight } from "@tabler/icons-react";

export default function Laws34() {
  return (
    <>
      <Header title="Index: Laws 3 & 4" backTo="/indices/laws-1-2" />
      <div className="content">
        <Card variant="purple">
          <Badge>Third Law</Badge>
          <div className="title">Power of a Power Rule</div>
          <FormulaBox formula="(aᵐ)ⁿ = aᵐⁿ" />
          <div className="label" style={{ marginTop: 8 }}>Example</div>
          <Step>
            <span>(9²)³ = 9²ˣ³ = 9⁶</span>
          </Step>
        </Card>

        <Card variant="blue">
          <Badge>Fourth Law</Badge>
          <div className="title">Zero Index Rule</div>
          <FormulaBox formula="a⁰ = 1   (where a ≠ 0)" />
          <div className="label" style={{ marginTop: 8 }}>Example</div>
          <Step>
            <span>3⁰ = 1</span>
          </Step>
        </Card>

        <PrimaryButton to="/indices/laws-5-6">
          Next: Laws 5 &amp; 6 <IconArrowRight size={18} />
        </PrimaryButton>
      </div>
    </>
  );
}
