import { Question } from "../question/Question";
import { Response } from "../response/Response";

export type Choice = {
  createdAt: Date;
  id: string;
  question?: Question | null;
  responses?: Array<Response>;
  text: string | null;
  updatedAt: Date;
};
