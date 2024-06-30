import React from "react";
import { cn } from "../lib/utils";
import { ItemContext } from "./AccordionItem";
import { PlusIcon } from "@heroicons/react/24/solid";
import { isAccordionItemSelected, useAccordion } from "../hooks/useAccordion";
import { AccordionHeaderProps } from "../types/accordion";

const AccordionHeader = React.forwardRef<HTMLButtonElement, AccordionHeaderProps>(
  ({ children, className, ...props }, ref) => {
    const { activeValue, onSelect } = useAccordion();
    const value = React.useContext(ItemContext);
    const isActive = isAccordionItemSelected(activeValue, value!);

    return (
      <button
        ref={ref}
        {...props}
        onClick={() => onSelect(value!)}
        className={cn(
          "text-lg flex items-center justify-between py-4 border-none font-medium utline-none space-x-2 w-full",
          className
        )}
      >
        {children}
        <PlusIcon
          className={`size-5  ${
            isActive && "rotate-45"
          }  transition-all duration-200`}
        />
      </button>
    );
  }
);

export default AccordionHeader;
