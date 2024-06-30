interface AccordionSingleProps {
  /**
   * Specifies that only one item can be expanded at a time.
   */
  type: "single";
  /**
   * The value of the default expanded item.
   */
  defaultExpanded?: string;
  /**
   * Callback function called when the expanded item value changes.
   * @param value The new value of the expanded item.
   */
  onValueChange?: (value: string) => void;
}

interface AccordionMultipleProps {
  /**
   * Specifies that multiple items can be expanded simultaneously.
   */
  type: "multiple";
  /**
   * The values of the default expanded items.
   */
  defaultExpanded?: string[];
  /**
   * Callback function called when the expanded item values change.
   * @param value The new values of the expanded items.
   */
  onValueChange?: (value: string[]) => void;
}

interface AccordionCommonProps extends React.HTMLAttributes<HTMLDivElement> {}
export type AccordionProps = AccordionCommonProps &
  (AccordionSingleProps | AccordionMultipleProps);

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Unique value that identifies the accordion item.
   */
  value: string;
}

export interface AccordionHeaderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export type AccordionValue = string | string[] | null | undefined;
export interface AccordionContextValue {
  /**
   * The currently active value(s) in the accordion.
   */
  activeValue: AccordionValue;
  /**
   * Callback function to toggle the selection of an value in the accordion.
   * @param value The value to toggle.
   */
  onSelect: (value: string) => void;
}