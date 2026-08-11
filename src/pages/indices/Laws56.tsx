import Header from "../../components/layout/Header";
import Card from "../../components/ui/Card";
import FormulaBox from "../../components/ui/FormulaBox";
import { Step } from "../../components/ui/Step";
import Badge from "../../components/ui/Badge";
import PrimaryButton from "../../components/ui/PrimaryButton";
import { IconArrowRight } from "@tabler/icons-react";

export default function Laws56() {
  return (
    <>
      <Header title="Index: Laws 5 & 6" backTo="/indices/laws-3-4" />
      <div className="content">
        <Card variant="purple">
          <Badge>Fifth Law</Badge>
          <div className="title">Negative Index Rule</div>
          <FormulaBox formula="a⁻ᵐ = 1 / aᵐ" />
          <div className="label" style={{ marginTop: 8 }}>Example</div>
          <Step>
            <span>7⁻² = 1 / 7²</span>
          </Step>
        </Card>

        <Card variant="blue">
          <Badge>Sixth Law</Badge>
          <div className="title">Reciprocal Negative Index Rule</div>
          <FormulaBox formula="1 / a⁻ᵐ = aᵐ" />
          <div className="label" style={{ marginTop: 8 }}>Example</div>
          <Step>
            <span>1 / 5⁻² = 5²</span>
          </Step>
        </Card>

        <PrimaryButton to="/indices/fractional">
          Next: Fractional Indices <IconArrowRight size={18} />
        </PrimaryButton>
      </div>
    </>
  );
}
