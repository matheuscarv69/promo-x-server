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

  async findProductByName(name: string) {
    console.log(name);
    const result = await this.products.find(product => product.name === name);
    console.log(result);

    return result;
  }

  async removeProductById(id: string) {

  }

}

export default new ProductService();