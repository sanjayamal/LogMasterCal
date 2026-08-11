import Header from "../../components/layout/Header";
import Card from "../../components/ui/Card";
import { Step, MathAnswer } from "../../components/ui/Step";
import PrimaryButton from "../../components/ui/PrimaryButton";
import { IconArrowRight } from "@tabler/icons-react";

export default function ExponentialEquations() {
  return (
    <>
      <Header title="Exponential Equations" backTo="/indices/fractional" />
      <div className="content">
        <Card variant="purple">
          <div className="title">Rules of Equality</div>
          <Step style={{ paddingTop: 6 }}>
            <span>Rule A:</span> If x ≠ 0 and xᵐ = xⁿ, then m = n
            <small>Equal bases → equal powers</small>
          </Step>
          <Step>
            <span>Rule B:</span> If m ≠ 0 and xᵐ = yᵐ, then x = y
            <small>Equal powers → equal bases</small>
          </Step>
        </Card>

        <Card variant="blue">
          <div className="title">Example: Solve for x</div>
          <Step>
            Given: <span>4ˣ = 64</span>
          </Step>
          <Step>
            Step 1: <span>4ˣ = 4³</span>
            <small>Expressing 64 as a power base of 4</small>
          </Step>
          <Step>
            Step 2 — Final: <br />
            <MathAnswer>x = 3</MathAnswer>
            <small style={{ marginTop: 6 }}>Since bases match, powers must match</small>
          </Step>
        </Card>

        <PrimaryButton to="/logarithms">
          Proceed to Logarithms <IconArrowRight size={18} />
        </PrimaryButton>
      </div>
    </>
  );
}
