import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Product } from "src/entities/Product";
import { ProductInput } from "src/models/ProductInput";
import ProductService from "src/services/ProductService";

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

}