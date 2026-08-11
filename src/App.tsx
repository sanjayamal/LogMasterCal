import { Routes, Route } from "react-router-dom";
import AppShell from "./components/layout/AppShell";
import Home from "./pages/Home";
import IndicesOverview from "./pages/indices/IndicesOverview";
import Laws12 from "./pages/indices/Laws12";
import Laws34 from "./pages/indices/Laws34";
import Laws56 from "./pages/indices/Laws56";
import FractionalIndices from "./pages/indices/FractionalIndices";
import ExponentialEquations from "./pages/indices/ExponentialEquations";
import LogsOverview from "./pages/logarithms/LogsOverview";
import LogTypes from "./pages/logarithms/LogTypes";
import CharacteristicMantissa from "./pages/logarithms/CharacteristicMantissa";
import LogLaws12 from "./pages/logarithms/LogLaws12";
import LogLaws34 from "./pages/logarithms/LogLaws34";
import BarOperations from "./pages/logarithms/BarOperations";
import Antilog from "./pages/logarithms/Antilog";
import Simplification from "./pages/Simplification";
import LogTable from "./pages/LogTable";
import Solver from "./pages/Solver";

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/indices" element={<IndicesOverview />} />
        <Route path="/indices/laws-1-2" element={<Laws12 />} />
        <Route path="/indices/laws-3-4" element={<Laws34 />} />
        <Route path="/indices/laws-5-6" element={<Laws56 />} />
        <Route path="/indices/fractional" element={<FractionalIndices />} />
        <Route path="/indices/exponential-equations" element={<ExponentialEquations />} />

        <Route path="/logarithms" element={<LogsOverview />} />
        <Route path="/logarithms/number-types" element={<LogTypes />} />
        <Route path="/logarithms/characteristic-mantissa" element={<CharacteristicMantissa />} />
        <Route path="/logarithms/laws-1-2" element={<LogLaws12 />} />
        <Route path="/logarithms/laws-3-4" element={<LogLaws34 />} />
        <Route path="/logarithms/bar-operations" element={<BarOperations />} />
        <Route path="/logarithms/antilog" element={<Antilog />} />

        <Route path="/simplification" element={<Simplification />} />
        <Route path="/log-table" element={<LogTable />} />
        <Route path="/solver" element={<Solver />} />
      </Routes>
    </AppShell>
  );
}
