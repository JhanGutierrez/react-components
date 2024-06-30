import React from "react";
import { cn } from "../lib/utils";
import { ItemContext } from "./AccordionItem";
import { useAccordion, isAccordionItemSelected } from "../hooks/useAccordion";
import { AccordionContentProps } from "../types/accordion";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ className, ...props }, ref) => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const { activeValue } = useAccordion();
  const value = React.useContext(ItemContext);
  const isActive = isAccordionItemSelected(activeValue, value!);

  const [contentHeight, setContentHeight] = React.useState<number | null>(null);
  React.useEffect(() => {
    if (contentRef.current)
      setContentHeight(contentRef.current.scrollHeight);
  }, []);

  return (
    <div
      ref={contentRef}
      className={cn(
        "text-black/50 overflow-hidden transition-all duration-200 ease-in-out",
        className
      )}
      style={{ height: isActive ? `${contentHeight}px` : "0px" }}
    >
      <div ref={ref} className={cn("pb-4", className)} {...props} />
    </div>
  );
});

export default AccordionContent;
