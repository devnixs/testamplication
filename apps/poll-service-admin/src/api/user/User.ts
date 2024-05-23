import { Response } from "../response/Response";

export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  responses?: Array<Response>;
  updatedAt: Date;
};
