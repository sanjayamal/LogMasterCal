import { useMemo, useState } from "react";
import { IconInfoCircle } from "@tabler/icons-react";
import Header from "../components/layout/Header";
import BottomNav from "../components/layout/BottomNav";
import InfoBox from "../components/ui/InfoBox";
import { buildLogTable } from "../utils/logTable";
import "./LogTable.css";

const COLUMNS = Array.from({ length: 10 }, (_, i) => i);

export default function LogTable() {
  const rows = useMemo(() => buildLogTable(), []);
  const [selectedN, setSelectedN] = useState<number | null>(null);

  return (
    <>
      <Header title="Common Logarithm Table" backTo="/" />
      <div className="content">
        <InfoBox variant="tip">
          <IconInfoCircle size={16} style={{ verticalAlign: -3, marginRight: 2 }} />
          Locate base under 'N', read across columns (0-9).
        </InfoBox>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th className="sticky-col">N</th>
                {COLUMNS.map((c) => (
                  <th key={c}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(({ n, cells }) => {
                const classNames = [n % 2 !== 0 ? "odd-row" : "", n === selectedN ? "selected-row" : ""]
                  .filter(Boolean)
                  .join(" ");
                return (
                  <tr key={n} className={classNames || undefined} onClick={() => setSelectedN(n)}>
                    <td className="sticky-col">{n}</td>
                    {cells.map((cell, i) => (
                      <td key={i}>{cell}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 11, color: "var(--text-secondary)", textAlign: "center" }}>
          Values denote mantissa × 10000. Tap row to highlight.
        </p>
      </div>
      <BottomNav />
    </>
  );
}
