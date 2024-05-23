import { ResponseUpdateManyWithoutUsersInput } from "./ResponseUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  name?: string | null;
  responses?: ResponseUpdateManyWithoutUsersInput;
};
