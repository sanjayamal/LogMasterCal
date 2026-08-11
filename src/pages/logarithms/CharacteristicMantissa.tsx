import { IconArrowRight } from "@tabler/icons-react";
import Header from "../../components/layout/Header";
import Card from "../../components/ui/Card";
import FormulaBox from "../../components/ui/FormulaBox";
import PrimaryButton from "../../components/ui/PrimaryButton";

export default function CharacteristicMantissa() {
  return (
    <>
      <Header title="Characteristic & Mantissa" backTo="/logarithms/number-types" />
      <div className="content">
        <Card>
          <div className="title" style={{ marginBottom: 12, textAlign: "center" }}>
            Anatomy of a Logarithm
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: 38,
              fontWeight: 700,
              fontFamily: "var(--font-mono)",
              color: "var(--color-primary)",
              padding: "6px 0",
              letterSpacing: 1,
            }}
          >
            1.3909
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
            <div
              style={{
                flex: 1,
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "var(--border-radius-md)",
                padding: 12,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 700, color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}>
                1
              </div>
              <div style={{ fontSize: 11, color: "var(--text-secondary)", fontWeight: 500, marginTop: 4 }}>
                Characteristic
                <br />
                (Integer part)
              </div>
            </div>
            <div
              style={{
                flex: 1,
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "var(--border-radius-md)",
                padding: 12,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 700, color: "var(--color-primary)", fontFamily: "var(--font-mono)" }}>
                .3909
              </div>
              <div style={{ fontSize: 11, color: "var(--text-secondary)", fontWeight: 500, marginTop: 4 }}>
                Mantissa
                <br />
                (Decimal, always +)
              </div>
            </div>
          </div>
        </Card>

        <Card variant="amber">
          <div className="title">Bar Notation (0 to 1 scale)</div>
          <p className="subtitle" style={{ margin: "6px 0" }}>
            When a number values between 0 and 1, its characteristic registers negative while mantissa remains positive.
          </p>
          <FormulaBox formula="2̄.3725 = −2 + 0.3725" style={{ background: "#fff" }} />
          <p style={{ fontSize: 12, color: "var(--amber-text)", fontWeight: 500 }}>
            Only the leading integer characteristic (2) is negative!
          </p>
        </Card>

        <PrimaryButton to="/logarithms/laws-1-2">
          Next: Log Laws 1 &amp; 2 <IconArrowRight size={18} />
        </PrimaryButton>
      </div>
    </>
  );
}
