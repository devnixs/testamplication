import { ChoiceWhereUniqueInput } from "../choice/ChoiceWhereUniqueInput";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResponseUpdateInput = {
  choice?: ChoiceWhereUniqueInput | null;
  question?: QuestionWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
