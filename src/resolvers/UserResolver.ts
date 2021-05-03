import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { User } from "../entities/User";
import { UserInput } from "../models/UserInput";
import { UserService } from '../services/UserService'

@Resolver(User)
export class UserResolver {

  private userService: UserService;
  constructor(){
    this.userService = new UserService;
  }

  @Mutation(returns => User)
  async createUser(@Arg('user') newUserData: UserInput) {
    const user = await this.userService.createUser(newUserData);
    return user;
  }



}