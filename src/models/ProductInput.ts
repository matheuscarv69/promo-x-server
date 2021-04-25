import { Product } from "../entities/Product";
import { Field, InputType, ID } from "type-graphql";

@InputType({ description: "New Product data" })
export class ProductInput implements Partial<Product>{

  @Field(type => ID, { nullable: true })
  _id?: string;

  @Field()
  name: string;

  @Field()
  image?: string;

  @Field()
  category?: string;

}