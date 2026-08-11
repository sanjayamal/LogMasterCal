import { IconNumber123, IconBrackets, IconMinus, IconDivide, IconEqual } from "@tabler/icons-react";
import Header from "../../components/layout/Header";
import Card from "../../components/ui/Card";
import TopicCard from "../../components/ui/TopicCard";
import { SectionTitle } from "../../components/ui/Stats";

export default function IndicesOverview() {
  return (
    <>
      <Header title="Indices (දර්ශක)" backTo="/" />
      <div className="content">
        <Card variant="purple">
          <p className="label">What you'll learn</p>
          <p className="subtitle">
            The 6 laws of indices, fractional &amp; negative indices, and exponential equations —
            the foundation before logarithms.
          </p>
        </Card>

        <SectionTitle>Lessons</SectionTitle>

        <TopicCard
          to="/indices/laws-1-2"
          icon={IconNumber123}
          iconVariant="purple"
          title="Laws 1 & 2"
          subtitle="Multiplication & Division rules"
        />
        <TopicCard
          to="/indices/laws-3-4"
          icon={IconBrackets}
          iconVariant="purple"
          title="Laws 3 & 4"
          subtitle="Power of a power & zero index"
        />
        <TopicCard
          to="/indices/laws-5-6"
          icon={IconMinus}
          iconVariant="purple"
          title="Laws 5 & 6"
          subtitle="Negative & reciprocal index rules"
        />
        <TopicCard
          to="/indices/fractional"
          icon={IconDivide}
          iconVariant="purple"
          title="Fractional Indices"
          subtitle="nth root as fractional power"
        />
        <TopicCard
          to="/indices/exponential-equations"
          icon={IconEqual}
          iconVariant="purple"
          title="Exponential Equations"
          subtitle="Solving for unknown powers"
        />
      </div>
    </>
  );
}
