import { IconBulb, IconArrowRight } from "@tabler/icons-react";
import Header from "../../components/layout/Header";
import Card from "../../components/ui/Card";
import FormulaBox from "../../components/ui/FormulaBox";
import { Step } from "../../components/ui/Step";
import Badge from "../../components/ui/Badge";
import InfoBox from "../../components/ui/InfoBox";
import PrimaryButton from "../../components/ui/PrimaryButton";

export default function LogLaws12() {
  return (
    <>
      <Header title="Logarithms: Laws 1 & 2" backTo="/logarithms/characteristic-mantissa" />
      <div className="content">
        <InfoBox variant="tip">
          <IconBulb size={16} style={{ verticalAlign: -3, marginRight: 2 }} />
          Notice how indices structurally map directly into logs.
        </InfoBox>

        <Card variant="blue">
          <Badge>First Law</Badge>
          <div className="title">Logarithm of the Base</div>
          <FormulaBox formula="logₐ(a) = 1" />
          <div className="label" style={{ marginTop: 8 }}>Example</div>
          <Step>
            <span>2 = 2¹ → log₂(2) = 1</span>
          </Step>
        </Card>

        <Card variant="purple">
          <Badge>Second Law</Badge>
          <div className="title">Logarithm of One</div>
          <FormulaBox formula="logₐ(1) = 0" />
          <div className="label" style={{ marginTop: 8 }}>Example</div>
          <Step>
            <span>1 = 2⁰ → log₂(1) = 0</span>
          </Step>
        </Card>

        <PrimaryButton to="/logarithms/laws-3-4">
          Next: Laws 3 &amp; 4 <IconArrowRight size={18} />
        </PrimaryButton>
      </div>
    </>
  );
}
