import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Product } from "../entities/Product";
import { ProductInput } from "../models/ProductInput";
import ProductService from "../services/ProductService";

@Resolver(Product)
export class ProductResolver {

  @Query(() => [Product])
  async getAllProducts() {
    const results = await ProductService.getAll();
    return results;
  }

  @Mutation(returns => Product)
  async createProduct(@Arg('product') productData: ProductInput) {
    const product = await ProductService.createProduct(productData);
    return product;
  }

  @Query(() => Product)
  async findProductByName(@Arg('productName') productName: string) {
    const result = await ProductService.findProductByName(productName);

    return result;
  }

  

}