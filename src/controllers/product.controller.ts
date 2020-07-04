import ProductRepository from "../repositories/impl/product.repository.ts";
import { Context, Response } from "../types/response.ts";
import { Helpers } from "../deps.ts";
import Product from "../models/product.ts";

class ProductController {
  async getAll(ctx: Context) {
    const products = await ProductRepository.getAll();

    ctx.response.build({
      status: 200,
      body: products,
    });
  }

  async get(ctx: Context) {
    const { id } = Helpers.getQuery(ctx, { mergeParams: true });
    const product = await ProductRepository.get(parseInt(id));

    ctx.response.build({
      status: 200,
      body: product,
    });
  }

  async post(ctx: Context) {
    const product = (await ctx.request.body()).value as Product;

    const result = await ProductRepository.post(product);

    ctx.response.build({
      status: 201,
      body: result,
    });
  }

  async put(ctx: Context) {
    const product = (await ctx.request.body()).value as Product;

    const result = await ProductRepository.put(product);

    ctx.response.build({
      status: 201,
      body: result,
    });
  }

  async delete(ctx: Context) {
    const { id } = Helpers.getQuery(ctx, { mergeParams: true });

    const result = await ProductRepository.delete(parseInt(id));

    ctx.response.build({
      status: 201,
      body: result,
    });
  }
}

export default new ProductController();
