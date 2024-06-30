import React from "react";
import { AccordionContextValue, AccordionValue } from "../types/accordion";

const AccordionContext = React.createContext<AccordionContextValue | null>(
  null
);
const useAccordion = () => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("useRoot must be used within an AccordionProvider");
  }
  return context;
};

const isAccordionItemSelected = (
  activeValue: AccordionValue,
  selectedValue: string
):boolean => {
  return Array.isArray(activeValue)
    ? activeValue.includes(selectedValue)
    : activeValue === selectedValue;
};

export { AccordionContext, useAccordion, isAccordionItemSelected };
