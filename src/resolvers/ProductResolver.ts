import { Query, Resolver } from "type-graphql";
import { Product } from "src/entities/Product";
import ProductService from "src/services/ProductService";


@Resolver(Product)
export class ProductResolver {

  @Query(() => [Product])
  async getAllProducts() {
    const results = await ProductService.getAll();
    return results;
  }



}