import { getModelForClass, prop } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
class Product {

  @Field(type => ID)
  _id?: string;

  @Field()
  @prop()
  name: string;

  @Field()
  @prop()
  image: string;

  @Field()
  @prop()
  category: string;
}

const ProductModel = getModelForClass(Product);

export { Product, ProductModel };