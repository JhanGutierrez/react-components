import React from "react";
import { cn } from "../lib/utils";
import { AccordionItemProps } from "../types/accordion";

const ItemContext = React.createContext<string | null>(null);
const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, ...props }, ref) => {
    return (
      <ItemContext.Provider value={value}>
        <div
          ref={ref}
          className={cn(
            "border-b last:border-none",
            className
          )}
          {...props}
        />
      </ItemContext.Provider>
    );
  }
);
export { AccordionItem, ItemContext };
