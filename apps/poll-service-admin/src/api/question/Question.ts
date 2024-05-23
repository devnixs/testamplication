import { Choice } from "../choice/Choice";
import { Response } from "../response/Response";

export type Question = {
  choices?: Array<Choice>;
  createdAt: Date;
  description: string | null;
  id: string;
  responses?: Array<Response>;
  title: string | null;
  updatedAt: Date;
};
