import React from "react";
import { cn } from "../lib/utils";
import {
  AccordionContextValue,
  AccordionValue,
  AccordionProps,
} from "../types/accordion";
import { AccordionContext } from "../hooks/useAccordion";

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ type, className, defaultExpanded, onValueChange, ...props }, ref) => {
    const [activeValue, setActiveValue] = React.useState<AccordionValue>(defaultExpanded);

    const onSelect = React.useCallback(
      (value: string) => {
        if (type === "multiple") {
          setActiveValue((prev) => {
            if (Array.isArray(prev)) {
              return prev.includes(value)
                ? prev.filter((key) => key !== value)
                : [...prev, value];
            }
            return [value];
          });
        } else setActiveValue((prev) => (prev === value ? null : value));
      }, [type]
    );

    const cotextValues: AccordionContextValue = React.useMemo(
      () => ({ activeValue, onSelect }),
      [onSelect, activeValue]
    );

    return (
      <AccordionContext.Provider value={cotextValues}>
        <div ref={ref}
          className={cn("border bg-white rounded-xl p-4", className)}
          {...props}
        />
      </AccordionContext.Provider>
    );
  }
);

export default Accordion;