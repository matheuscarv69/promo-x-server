import { Product, ProductModel } from "../entities/Product";
import { ProductInput } from "../models/ProductInput";

class ProductService {

  async getAll() {
    const products = await ProductModel.find({});
    return products;
  }

  async getProductById(id: string): Promise<Product> {
    const product = await ProductModel.findOne({ _id: id });
    return product;
  }

  async searchProductsByName(name: string): Promise<Product[]> {
    const result = await ProductModel.find({ 'name': new RegExp('.*' + name + '*.', 'i') });
    return result;
  }

  async createProduct(newProductData: ProductInput) {
    const product = await ProductModel.create(newProductData);
    return product;
  }

  async updateProductById(productData: ProductInput): Promise<Product> {
    const { _id } = productData;
    const productUpdated = await ProductModel.findByIdAndUpdate(_id, productData);
    return productUpdated;
  }

  async removeProductById(_id: string): Promise<Product> {
    const productRemoved = await ProductModel.findByIdAndRemove(_id);
    return productRemoved;
  }

}

export default new ProductService();