import { Choice } from "../choice/Choice";
import { Question } from "../question/Question";
import { User } from "../user/User";

export type Response = {
  choice?: Choice | null;
  createdAt: Date;
  id: string;
  question?: Question | null;
  updatedAt: Date;
  user?: User | null;
};
