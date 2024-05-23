import { ChoiceUpdateManyWithoutQuestionsInput } from "./ChoiceUpdateManyWithoutQuestionsInput";
import { ResponseUpdateManyWithoutQuestionsInput } from "./ResponseUpdateManyWithoutQuestionsInput";

export type QuestionUpdateInput = {
  choices?: ChoiceUpdateManyWithoutQuestionsInput;
  description?: string | null;
  responses?: ResponseUpdateManyWithoutQuestionsInput;
  title?: string | null;
};
