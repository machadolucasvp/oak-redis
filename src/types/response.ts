import { Response } from "../deps.ts";
import { Context as OakContext } from "../deps.ts";

export type Context = OakContext & { response: { build: ResponseBuilder } };

export type ResponseBuilder = (
  builder: { status: number; body?: Object },
) => Response;

export { Response };
