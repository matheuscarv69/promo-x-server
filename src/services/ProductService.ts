import { Product } from "src/entities/Product";
import { ProductInput } from "src/models/ProductInput";

class ProductService {

  products: Product[] = [];

  async getAll() {
    return await this.products;
  }

  async createProduct(productData: ProductInput) {
    const product = {
      name: productData.name,
      image: productData.image,
      category: productData.category,
    };

    await this.products.push(product);

    return product;
  }


  
}

export default new ProductService();