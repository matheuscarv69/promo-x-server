import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { User } from "../entities/User";
import { UserInput } from "../models/UserInput";
import { UserService } from '../services/UserService'

@Resolver(User)
export class UserResolver {

  

  @Mutation(returns => User)
  async createUser(@Arg('user') newUserData: UserInput) {
    const userService = new UserService();

    const user = await userService.createUser(newUserData);
    return user;
  }



}