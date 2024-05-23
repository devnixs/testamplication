import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { ResponseUpdateManyWithoutChoicesInput } from "./ResponseUpdateManyWithoutChoicesInput";

export type ChoiceUpdateInput = {
  question?: QuestionWhereUniqueInput | null;
  responses?: ResponseUpdateManyWithoutChoicesInput;
  text?: string | null;
};
