import ProductRepository from "../repositories/impl/ProductRepository.ts";
import { Context } from "../types/Response.ts";

class ProductController {
  async getAll(ctx: Context): Promise<void> {
    const products = await ProductRepository.getAll();

    ctx.response.build({
      status: 200,
      body: products,
    });
    return;
  }
}

export default new ProductController();
