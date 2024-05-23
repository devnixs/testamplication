import { ChoiceCreateNestedManyWithoutQuestionsInput } from "./ChoiceCreateNestedManyWithoutQuestionsInput";
import { ResponseCreateNestedManyWithoutQuestionsInput } from "./ResponseCreateNestedManyWithoutQuestionsInput";

export type QuestionCreateInput = {
  choices?: ChoiceCreateNestedManyWithoutQuestionsInput;
  description?: string | null;
  responses?: ResponseCreateNestedManyWithoutQuestionsInput;
  title?: string | null;
};
