import {
  IconNumber,
  IconDecimal,
  IconMathFunction,
  IconPlusMinus,
  IconArrowsExchange,
} from "@tabler/icons-react";
import Header from "../../components/layout/Header";
import Card from "../../components/ui/Card";
import TopicCard from "../../components/ui/TopicCard";
import { SectionTitle } from "../../components/ui/Stats";

export default function LogsOverview() {
  return (
    <>
      <Header title="Logarithms (ලඝුගණක)" backTo="/" />
      <div className="content">
        <Card variant="blue">
          <p className="label">Topic Overview</p>
          <p className="subtitle">
            Learn the 4 main log laws, characteristics, mantissa, bar notation, and standard operations.
          </p>
        </Card>

        <SectionTitle>Lessons</SectionTitle>

        <TopicCard
          to="/logarithms/number-types"
          icon={IconNumber}
          iconVariant="blue"
          title="Logarithm of a Number"
          subtitle="Types 01, 02 & 03 variants"
        />
        <TopicCard
          to="/logarithms/characteristic-mantissa"
          icon={IconDecimal}
          iconVariant="blue"
          title="Characteristic & Mantissa"
          subtitle="Anatomy structure of a log"
        />
        <TopicCard
          to="/logarithms/laws-1-2"
          icon={IconMathFunction}
          iconVariant="blue"
          title="Log Laws 1 & 2"
          subtitle="Identity & zero rules"
        />
        <TopicCard
          to="/logarithms/laws-3-4"
          icon={IconMathFunction}
          iconVariant="blue"
          title="Log Laws 3 & 4"
          subtitle="Product & quotient rules"
        />
        <TopicCard
          to="/logarithms/bar-operations"
          icon={IconPlusMinus}
          iconVariant="blue"
          title="Bar Notation Operations"
          subtitle="Adding & subtracting bar values"
        />
        <TopicCard
          to="/logarithms/antilog"
          icon={IconArrowsExchange}
          iconVariant="blue"
          title="Antilogarithm (Antilog)"
          subtitle="Finding base value transformations"
        />
      </div>
    </>
  );
}
