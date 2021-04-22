import { Product } from "../entities/Product";
import { ProductInput } from "../models/ProductInput";

class ProductService {

  products: Product[] = [];

  async getAll() {
    return await this.products;
  }

  async createProduct(productData: ProductInput) {
    let aux = await new Date().getMilliseconds().toString();
    const product = {
      _id: aux,
      name: productData.name,
      image: productData.image,
      category: productData.category,
    };

    await this.products.push(product);

    return product;
  }

}

export default new ProductService();