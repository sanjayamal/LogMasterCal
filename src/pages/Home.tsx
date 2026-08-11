import { IconMathFunction, IconSuperscript, IconVariable, IconCalculator } from "@tabler/icons-react";
import BottomNav from "../components/layout/BottomNav";
import TopicCard from "../components/ui/TopicCard";
import { SectionTitle, StatCard, ProgressBar } from "../components/ui/Stats";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="welcome-hero">
        <div className="app-logo">
          <IconMathFunction size={28} />
        </div>
        <h2>LogMaster</h2>
        <p>Master logarithms &amp; indices the easy way</p>
      </div>

      <div className="content">
        <SectionTitle>Grade 11 Curriculum</SectionTitle>

        <TopicCard
          to="/indices"
          icon={IconSuperscript}
          iconVariant="purple"
          title="Indices (දර්ශක)"
          subtitle="6 laws of indices & exponential equations"
        />
        <TopicCard
          to="/logarithms"
          icon={IconVariable}
          iconVariant="blue"
          title="Logarithms (ලඝුගණක)"
          subtitle="Log laws, characteristics & mantissa"
        />
        <TopicCard
          to="/simplification"
          icon={IconCalculator}
          iconVariant="teal"
          title="Simplification"
          subtitle="Solve expressions using log tables"
        />

        <SectionTitle>Your Progress</SectionTitle>
        <div className="grid-2">
          <StatCard num="3" label="Topics" />
          <StatCard num="0%" label="Complete" />
        </div>
        <ProgressBar percent={0} />
      </div>

      <BottomNav />
    </>
  );
}
