export interface LogTableRow {
  n: number;
  cells: string[];
}

export function buildLogTable(startN = 10, endN = 54): LogTableRow[] {
  const rows: LogTableRow[] = [];
  for (let n = startN; n <= endN; n++) {
    const cells: string[] = [];
    for (let d = 0; d <= 9; d++) {
      const value = Math.log10(n + d / 10);
      const mantissa = value - Math.floor(value);
      cells.push(Math.round(mantissa * 10000).toString().padStart(4, "0"));
    }
    rows.push({ n, cells });
  }
  return rows;
}
