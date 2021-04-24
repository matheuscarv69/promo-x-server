import { Field, InputType } from "type-graphql";

@InputType()
export class ProductInput {

  @Field()
  name: string;

  @Field()
  image?: string;

  @Field()
  category?: string;


}