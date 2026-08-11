import { IconArrowRight } from "@tabler/icons-react";
import Header from "../../components/layout/Header";
import Card from "../../components/ui/Card";
import { Step, MathAnswer } from "../../components/ui/Step";
import Badge from "../../components/ui/Badge";
import InfoBox from "../../components/ui/InfoBox";
import PrimaryButton from "../../components/ui/PrimaryButton";

export default function BarOperations() {
  return (
    <>
      <Header title="Adding & Subtracting Logs" backTo="/logarithms/laws-3-4" />
      <div className="content">
        <InfoBox variant="rule">
          Rule: Isolate negative characteristics cleanly away from positive mantissa fields before computing parameters.
        </InfoBox>

        <Card variant="blue">
          <Badge>(A) Addition</Badge>
          <div className="title">Addition with Bar Values</div>
          <Step>
            <span>3̄.9211 + 2.3142</span>
          </Step>
          <Step>
            Step 1: <span>= −3 + 0.9211 + 2 + 0.3142</span>
          </Step>
          <Step>
            Step 2: <span>= (−3 + 2) + (0.9211 + 0.3142)</span>
          </Step>
          <Step>
            Step 3: <span>= −1 + 1.2353</span>
          </Step>
          <Step>
            Step 4: <span>= −1 + 1 + 0.2353</span>
          </Step>
          <Step>
            Final: <br />
            <MathAnswer>= 0̄.2353</MathAnswer>
          </Step>
        </Card>

        <Card variant="purple">
          <Badge>(B) Subtraction</Badge>
          <div className="title">Subtraction with Bar Values</div>
          <Step>
            <span>2.5143 − 1̄.9143</span>
          </Step>
          <Step>
            Step 1: <span>= 2 + 0.5143 − (−1 + 0.9143)</span>
          </Step>
          <Step>
            Step 2: <span>= 2 + 0.5143 + 1 − 0.9143</span>
          </Step>
          <Step>
            Step 3: <span>= (2 + 1) + (0.5143 − 0.9143)</span>
          </Step>
          <Step>
            Step 4: <span>= 3 − 0.4000</span>
          </Step>
          <Step>
            Final: <br />
            <MathAnswer>= 2.6143</MathAnswer>
          </Step>
        </Card>

        <PrimaryButton to="/logarithms/antilog">
          Next: Antilogarithm <IconArrowRight size={18} />
        </PrimaryButton>
      </div>
    </>
  );
}
