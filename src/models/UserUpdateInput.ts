import { IsEmail, Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType({ description: "User data update" })
export class UserUpdateInput {

  @Field()
  _id: string;

  @Field({ nullable: true })
  @Length(1, 255)
  name?: string;

  @Field({ nullable: true })
  @IsEmail()
  email?: string;

  @Field(type => [String], { nullable: true })
  levelsAccess?: string[];

  @Field({ nullable: true })
  chain_store?: string;

}