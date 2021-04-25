import { Product } from "../entities/Product";
import { ProductInput } from "../models/ProductInput";

class ProductService {

  products: Product[] = [{
    "_id": "56",
    "name": "Peixe",
    "image": "Peixe.png",
    "category": "Organic",
  },
  {
    "_id": "939",
    "name": "Carne",
    "image": "Carne.png",
    "category": "Organic"
  },
  {
    "_id": "679",
    "name": "Picanha",
    "image": "Picanha.png",
    "category": "Organic"
  },
  {
    "_id": "827",
    "name": "Arroz",
    "image": "Arroz.png",
    "category": "Perishable"
  },
  {
    "_id": "243",
    "name": "Feijão",
    "image": "Feijão.png",
    "category": "Perishable"
  },
  {
    "_id": "847",
    "name": "Macarrão",
    "image": "Macarrão.png",
    "category": "Perishable"
  }];

  async getAll() {
    return await this.products;
  }

  async createProduct(productData: ProductInput) {
    let aux = new Date().getMilliseconds().toString();
    const product = {
      _id: aux,
      name: productData.name,
      image: productData.image,
      category: productData.category,
    };

    await this.products.push(product);

    return product;
  }

  async findProductByName(name: string): Promise<Product> {
    const result = await this.products.find(product => product.name === name);
    return result;
  }

  async removeProductById(_id: string): Promise<String> {
    if (this.products.length === 0) {
      return "Product List is empty";
    }

    const productExists = await this.products.find(product => product._id === _id);
    if (!productExists) {
      return "Product not exists";
    }

    const index = await this.products.indexOf(productExists);

    console.log(this.products)

    const productRemoved = await this.products.splice(index, 1);
    console.log(this.products)

    return `Product removed: ${productRemoved[0].name}`;
  }

}

export default new ProductService();