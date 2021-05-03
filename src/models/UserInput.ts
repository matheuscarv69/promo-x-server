import { User } from "src/entities/User";
import { Field, InputType } from "type-graphql";

@InputType({ description: "New User data" })
export class UserInput implements Partial<Omit<User, '_id'>>{

  @Field({ nullable: true })
  _id?: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  level_access: string;

  @Field()
  chain_store: string;
  
}