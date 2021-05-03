import { Length } from "class-validator";
import { Field, InputType } from "type-graphql";

import { Product } from "../entities/Product";

@InputType({ description: "New Product data" })
export class ProductInput implements Partial<Omit<Product, '_id'>>{

  @Field({ nullable: true })
  _id?: string;

  @Field()
  @Length(1, 255)
  name: string;

  @Field()
  image: string;

  @Field()
  @Length(1, 255)
  category: string;

}