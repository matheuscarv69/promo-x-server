import { Product } from "src/entities/Product";

class ProductService {

  products: Product[] = [];

  async getAll() {
    return await this.products;
  }

  async create(product: Product) {
    product.id = `${new Date()}`;
    this.products.add(product);

    return await this.products;
  }

}

export default new ProductService();