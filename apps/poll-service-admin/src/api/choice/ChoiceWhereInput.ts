import { StringFilter } from "../../util/StringFilter";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { ResponseListRelationFilter } from "../response/ResponseListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ChoiceWhereInput = {
  id?: StringFilter;
  question?: QuestionWhereUniqueInput;
  responses?: ResponseListRelationFilter;
  text?: StringNullableFilter;
};
