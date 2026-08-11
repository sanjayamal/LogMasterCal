export type SolverOperation = "×" | "÷";

export interface SolverResult {
  a: number;
  b: number;
  opSymbol: SolverOperation;
  lawNumber: 3 | 4;
  lawSymbol: "+" | "−";
  law: string;
  lgA: number;
  lgB: number;
  lgResult: number;
  result: number;
}

export function solveLog(a: number, b: number, operation: SolverOperation): SolverResult {
  const lgA = Math.log10(a);
  const lgB = Math.log10(b);
  const isMultiply = operation === "×";

  return {
    a,
    b,
    opSymbol: operation,
    lawNumber: isMultiply ? 3 : 4,
    lawSymbol: isMultiply ? "+" : "−",
    law: isMultiply ? "lg(m × n) = lg m + lg n" : "lg(m / n) = lg m − lg n",
    lgA,
    lgB,
    lgResult: isMultiply ? lgA + lgB : lgA - lgB,
    result: isMultiply ? a * b : a / b,
  };
}
