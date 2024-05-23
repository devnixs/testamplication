import { Choice as TChoice } from "../api/choice/Choice";

export const CHOICE_TITLE_FIELD = "text";

export const ChoiceTitle = (record: TChoice): string => {
  return record.text?.toString() || String(record.id);
};
