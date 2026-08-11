import Header from "../../components/layout/Header";
import Card from "../../components/ui/Card";
import FormulaBox from "../../components/ui/FormulaBox";
import { Step } from "../../components/ui/Step";
import Badge from "../../components/ui/Badge";
import InfoBox from "../../components/ui/InfoBox";
import PrimaryButton from "../../components/ui/PrimaryButton";
import { IconArrowRight } from "@tabler/icons-react";

export default function Laws12() {
  return (
    <>
      <Header title="Index: Laws 1 & 2" backTo="/indices" />
      <div className="content">
        <InfoBox variant="tip">Master the 6 fundamental laws of indices with simple structural examples.</InfoBox>

        <Card variant="purple">
          <Badge>First Law</Badge>
          <div className="title">Multiplication Rule</div>
          <FormulaBox formula="aᵐ × aⁿ = aᵐ⁺ⁿ" />
          <div className="label" style={{ marginTop: 8 }}>Example</div>
          <Step>
            <span>10³ × 10⁴ = 10³⁺⁴ = 10⁷</span>
          </Step>
        </Card>

        <Card variant="blue">
          <Badge>Second Law</Badge>
          <div className="title">Division Rule</div>
          <FormulaBox formula="aᵐ ÷ aⁿ = aᵐ⁻ⁿ" />
          <div className="label" style={{ marginTop: 8 }}>Example</div>
          <Step>
            <span>10⁴ ÷ 10² = 10⁴⁻² = 10²</span>
          </Step>
        </Card>

        <PrimaryButton to="/indices/laws-3-4">
          Next: Laws 3 &amp; 4 <IconArrowRight size={18} />
        </PrimaryButton>
      </div>
    </>
  );
}
