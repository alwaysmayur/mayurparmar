import Section from "./section";
import Badge from "@/components/ui/badge";
import { stack } from "@/lib/data";

export default function EngineeringStack() {
  return (
    <Section id="engineering-stack" title="Engineering Stack">
      <div className="space-y-6">
        {Object.entries(stack).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-base font-semibold text-foreground">{category}</h3>
            <ul className="mt-2.5 flex flex-wrap gap-2">
              {items.map((item) => (
                <li key={item}>
                  <Badge>{item}</Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
