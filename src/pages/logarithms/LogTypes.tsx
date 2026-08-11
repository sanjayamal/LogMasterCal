import { IconArrowsUpDown, IconArrowRight } from "@tabler/icons-react";
import Header from "../../components/layout/Header";
import Card from "../../components/ui/Card";
import FormulaBox from "../../components/ui/FormulaBox";
import { Step, MathAnswer } from "../../components/ui/Step";
import Badge from "../../components/ui/Badge";
import InfoBox from "../../components/ui/InfoBox";
import PrimaryButton from "../../components/ui/PrimaryButton";

export default function LogTypes() {
  return (
    <>
      <Header title="Logarithm of a Number" backTo="/logarithms" />
      <div className="content">
        <InfoBox variant="rule">
          Important: The logarithm of a number is an approximate value. In Grade 11, we evaluate 3 core types.
        </InfoBox>

        <Card variant="blue">
          <Badge>Type 01</Badge>
          <div className="title">Numbers between 1 and 10</div>
          <p className="subtitle" style={{ marginBottom: 8 }}>
            Logarithm with up to 2 decimal places lying cleanly between 1 and 10.
          </p>
          <FormulaBox formula="lg(6.85) = 0.8357" />
          <div style={{ textAlign: "center", fontSize: 11, color: "var(--text-secondary)", margin: "4px 0" }}>
            <IconArrowsUpDown size={14} style={{ verticalAlign: -2 }} /> Corresponding Index Form
          </div>
          <FormulaBox formula="6.85 = 10^0.8357" />
        </Card>

        <Card variant="teal">
          <Badge color="green">Type 02</Badge>
          <div className="title">Numbers greater than 10</div>
          <p className="subtitle" style={{ marginBottom: 6 }}>Example: lg(54.37) evaluation laws</p>
          <Step>
            <span>lg(54.37) = lg(5.437 × 10¹)</span>
          </Step>
          <Step>
            <span>= lg(5.437) + lg(10¹)</span>
          </Step>
          <Step>
            <span>= 0.7354 + 1</span>
          </Step>
          <Step>
            <MathAnswer>= 1.7354</MathAnswer>
          </Step>
        </Card>

        <Card variant="amber">
          <Badge color="amber">Type 03</Badge>
          <div className="title">Numbers between 0 and 1</div>
          <p className="subtitle" style={{ marginBottom: 8 }}>
            Characteristic is negative → implement clean bar notation formatting.
          </p>
          <FormulaBox formula="lg(0.004302) → 3̄.6336" style={{ background: "#fff" }} />
          <p style={{ fontSize: 12, color: "var(--amber-text)", fontWeight: 500 }}>
            Count zeros after decimal point to isolate the bar characteristic (3̄).
          </p>
        </Card>

        <PrimaryButton to="/logarithms/characteristic-mantissa">
          Next: Characteristic &amp; Mantissa <IconArrowRight size={18} />
        </PrimaryButton>
      </div>
    </>
  );
}
