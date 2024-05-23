import { ChoiceListRelationFilter } from "../choice/ChoiceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ResponseListRelationFilter } from "../response/ResponseListRelationFilter";

export type QuestionWhereInput = {
  choices?: ChoiceListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  responses?: ResponseListRelationFilter;
  title?: StringNullableFilter;
};
