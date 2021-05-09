import { Resolver, Query, Arg } from "type-graphql";

import { LoginInput } from "../models/LoginInput";
import { AuthService } from "../services/AuthService";
import { User } from "../entities/User";

@Resolver(User)
export class AuthResolver {

  private authService: AuthService;
  constructor() {
    this.authService = new AuthService;
  }

  @Query(returns => String)
  async authenticate(@Arg('credentials') credentials: LoginInput): Promise<string> {
    const token = await this.authService.authenticate(credentials);
    return token;
  }

}