import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { Product } from "../entities/Product";
import { ProductInput } from "../models/ProductInput";
import ProductService from "../services/ProductService";

@Resolver(Product)
export class ProductResolver {

  @Query(returns => [Product])
  async getAllProducts() {
    const results = await ProductService.getAll();
    return results;
  }

  @Query(returns => Product)
  async getProductById(@Arg('productId') productId: string) {
    const result = await ProductService.getProductById(productId);
    return result;
  }

  @Query(returns => [Product])
  async searchProductsByName(@Arg('productName') productName: string) {
    const result = await ProductService.searchProductsByName(productName);
    return result;
  }

  @Mutation(returns => Product)
  async createProduct(@Arg('product') newProductData: ProductInput) {
    const product = await ProductService.createProduct(newProductData);
    return product;
  }

  @Mutation(returns => Product)
  async updateProductById(@Arg('productDataUpdate') productDataUpdate: ProductInput) {
    const product = await ProductService.updateProductById(productDataUpdate);
    return product;
  }

  @Mutation(returns => Product)
  async removeProductById(@Arg('productId') productId: string) {

    try {
      return await ProductService.removeProductById(productId);

    } catch (error) {
      console.error.bind(console, `Error ${error}`);
    }
  }

}