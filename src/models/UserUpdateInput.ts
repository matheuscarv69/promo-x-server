import { IsEmail, Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType({ description: "User data update" })
export class UserUpdateInput{

  @Field()
  _id: string;

  @Field({nullable: true})
  @Length(1, 255)
  name?: string;

  @Field({nullable: true})
  @IsEmail()
  email?: string;

  @Field({nullable: true})
  level_access?: string;

  @Field({nullable: true})
  chain_store?: string;

}