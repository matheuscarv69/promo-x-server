import { Product } from "../entities/Product";
import { Field, InputType } from "type-graphql";

@InputType({ description: "New Product data" })
export class ProductInput implements Partial<Product>{

  @Field()
  name: string;

  @Field()
  image?: string;

  @Field()
  category?: string;

}