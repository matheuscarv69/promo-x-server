import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Product {
 
  @Field()
  _id: string;

  @Field()
  name: string;

  @Field()
  image: string;

  @Field()
  category: string;
}