import { IconArrowRight } from "@tabler/icons-react";
import Header from "../../components/layout/Header";
import Card from "../../components/ui/Card";
import { Step, MathAnswer } from "../../components/ui/Step";
import InfoBox from "../../components/ui/InfoBox";
import PrimaryButton from "../../components/ui/PrimaryButton";

export default function Antilog() {
  return (
    <>
      <Header title="Antilogarithm (Antilog)" backTo="/logarithms/bar-operations" />
      <div className="content">
        <Card variant="blue">
          <div className="title">Example: Finding antilog of 2̄.7421</div>
          <Step>
            Step 1: <span>antilog(2̄.7421) = 5.522 × 10⁻²</span>
          </Step>
          <InfoBox variant="tip" style={{ margin: "10px 0" }}>
            Bar 2 states shift the decimal point exactly 2 places left!
          </InfoBox>
          <Step>
            Final Answer: <br />
            <MathAnswer>= 0.05522</MathAnswer>
          </Step>
        </Card>

        <PrimaryButton to="/simplification">
          Go to Simplification <IconArrowRight size={18} />
        </PrimaryButton>
      </div>
    </>
  );
}
