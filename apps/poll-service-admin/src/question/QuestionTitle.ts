import { Question as TQuestion } from "../api/question/Question";

export const QUESTION_TITLE_FIELD = "title";

export const QuestionTitle = (record: TQuestion): string => {
  return record.title?.toString() || String(record.id);
};
