import { Product } from "../entities/Product";
import { Field, InputType } from "type-graphql";

@InputType({ description: "New Product data" })
export class ProductInput implements Partial<Omit<Product, '_id'>>{

  @Field({ nullable: true })
  _id?: string;

  @Field()
  name: string;

  @Field()
  image: string;

  @Field()
  category: string;

}