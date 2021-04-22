import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Product {
 
  @Field()
  name: string;

  @Field()
  image: string;

  @Field()
  category: string;
}