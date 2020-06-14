import { Response } from "../deps.ts";

export type ResponseBuilder = (
  builder: { status: number; body?: Object },
) => Response;
