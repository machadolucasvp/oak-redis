import { config } from "https://deno.land/x/dotenv/mod.ts";

const ENV = config();

const appConfig: ({ port: number }) = {
  port: parseInt(ENV.PORT) || 8000,
};

export default appConfig;