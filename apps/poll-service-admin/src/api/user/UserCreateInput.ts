import { ResponseCreateNestedManyWithoutUsersInput } from "./ResponseCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  name?: string | null;
  responses?: ResponseCreateNestedManyWithoutUsersInput;
};
