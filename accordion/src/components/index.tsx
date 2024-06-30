import { default as Root } from "./Accordion";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
import { AccordionItem } from "./AccordionItem";

const Accordion = Object.assign(Root, {
  Item: AccordionItem,
  Header: AccordionHeader,
  Content: AccordionContent,
});

export default Accordion;