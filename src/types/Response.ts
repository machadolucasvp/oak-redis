import { Response } from "https://deno.land/x/oak/mod.ts";

export type ResponseBuilder = (
  builder: { status: number; body?: Object },
) => Response;
