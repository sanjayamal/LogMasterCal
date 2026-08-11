import Header from "../../components/layout/Header";
import Card from "../../components/ui/Card";
import FormulaBox from "../../components/ui/FormulaBox";
import { Step, MathAnswer } from "../../components/ui/Step";
import PrimaryButton from "../../components/ui/PrimaryButton";
import { IconArrowRight } from "@tabler/icons-react";

export default function FractionalIndices() {
  return (
    <>
      <Header title="Fractional Indices" backTo="/indices/laws-5-6" />
      <div className="content">
        <Card variant="purple">
          <div className="title">Core Rule</div>
          <FormulaBox formula="ⁿ√a = a^(1/n)" />
          <p className="subtitle">The nth root of a number can be written smoothly as a fractional power.</p>
        </Card>

        <Card variant="blue">
          <div className="title">Comprehensive Example</div>
          <div className="label" style={{ marginTop: 4 }}>Simplify: (³√a)^(−1/2)</div>
          <Step>
            Step 1: <span>= (a^(1/3))^(−1/2)</span>
            <small>Converting radical to fractional power</small>
          </Step>
          <Step>
            Step 2: <span>= a^(1/3 × −1/2)</span>
            <small>Applying power of a power rule</small>
          </Step>
          <Step>
            Step 3: <span>= a^(−1/6)</span>
            <small>Multiplying fractions together</small>
          </Step>
          <Step>
            Final Answer: <br />
            <MathAnswer>= 1 / a^(1/6)</MathAnswer>
            <small style={{ marginTop: 6 }}>Converting negative index to positive</small>
          </Step>
        </Card>

        <PrimaryButton to="/indices/exponential-equations">
          Next: Exponential Equations <IconArrowRight size={18} />
        </PrimaryButton>
      </div>
    </>
  );
}
