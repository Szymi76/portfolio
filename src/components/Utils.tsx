import clsx from "clsx";
import { Star } from "lucide-react";

type SectionTitleProps = { children: string; className?: string };
export const SectionTitle = (props: SectionTitleProps) => {
  return (
    <h1 className={clsx("text-4xl font-semibold mb-8", props.className)}>
      {props.children}
    </h1>
  );
};

type SectionProps = {
  id: string;
  secondaryBg?: boolean;
  children: React.ReactNode;
};
export const Section = (props: SectionProps) => {
  return (
    <section
      id={props.id}
      className={`py-20 px-5 xl:px-32 ${props.secondaryBg ? "bg-lime-50" : "bg-white"}`}
    >
      {props.children}
    </section>
  );
};

type TechRateProps = { value: number; label: string };
export const TechRate = (props: TechRateProps) => {
  return (
    <div>
      <h4 className="text-2xl text-nowrap">{props.label}</h4>
      <div className="flex gap-1">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Star
              size={26}
              stroke="transparent"
              fill={props.value > index ? "#fbbf24" : "#e2e8f0"}
            />
          ))}
      </div>
    </div>
  );
};
