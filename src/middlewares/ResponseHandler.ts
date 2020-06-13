import { Context, Response } from "https://deno.land/x/oak/mod.ts";

export default async (ctx: Context, next: any) => {
  try {

    Object.assign(ctx.response, {
      build: (response: { status: number, body?: Object }) => {
        ctx.response.status = response.status ?? ctx.response.status;
        ctx.response.body = response.body ?? ctx.response.body;
      }
    })

    await next();
  } catch (error) {

    console.log(error);
    throw error;
  }
}
