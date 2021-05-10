import { IsEmail, Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType({ description: "New User data" })
export class UserInput {

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

  @Field(type => [String])
  levelsAccess: string[];

  @Field()
  chain_store: string;

}