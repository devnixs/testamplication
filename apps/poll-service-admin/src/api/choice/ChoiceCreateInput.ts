import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { ResponseCreateNestedManyWithoutChoicesInput } from "./ResponseCreateNestedManyWithoutChoicesInput";

export type ChoiceCreateInput = {
  question?: QuestionWhereUniqueInput | null;
  responses?: ResponseCreateNestedManyWithoutChoicesInput;
  text?: string | null;
};
