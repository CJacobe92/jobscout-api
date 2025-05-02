import { createUser } from "./mutation/create.user.js";
import { deleteUser } from "./mutation/delete.user.js";
import { updateUser } from "./mutation/update.user.js";

export const userMutations = {
  Mutation: {
    createUser,
    updateUser,
    deleteUser
  }
};
