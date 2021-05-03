import { IsEmail, Length } from "class-validator";
import { Field, InputType } from "type-graphql";

import { User } from "src/entities/User";

@InputType({ description: "New User data" })
export class UserInput implements Partial<Omit<User, '_id'>>{

  @Field({ nullable: true })
  _id?: string;

  @Field()
  @Length(1, 255)
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @Length(1, 255)
  password: string;

  @Field()
  level_access: string;

  @Field()
  chain_store: string;

}