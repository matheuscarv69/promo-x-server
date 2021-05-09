import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";

import { User } from "../entities/User";
import { UserInput } from "../models/UserInput";
import { UserService } from '../services/UserService'

@Resolver(User)
export class UserResolver {

  private userService: UserService;
  constructor() {
    this.userService = new UserService;
  }

  @Authorized("CLIENT")
  @Query(returns => [User])
  async getAllUsers() {
    const results = await this.userService.getAll();
    return results;
  }

  @Query(returns => User)
  async getUserById(@Arg('userId') userId: string) {
    const result = await this.userService.getUserById(userId);
    return result;
  }

  @Mutation(returns => User)
  async createUser(@Arg('user') newUserData: UserInput) {
    const user = await this.userService.createUser(newUserData);
    return user;
  }



}