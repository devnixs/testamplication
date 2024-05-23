import { ChoiceWhereUniqueInput } from "../choice/ChoiceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResponseWhereInput = {
  choice?: ChoiceWhereUniqueInput;
  id?: StringFilter;
  question?: QuestionWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
