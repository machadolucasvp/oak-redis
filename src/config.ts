import { config } from "https://deno.land/x/dotenv/mod.ts";

const ENV = config();
interface App {
  port: number;
  dbHostname: string;
  dbUser: string;
  dbPassword: string;
  dbDatabase: string;
  dbPort: number;
}
const appConfig: App = {
  port: parseInt(ENV.PORT) || 8000,
  dbHostname: ENV.DB_HOSTNAME,
  dbUser: ENV.DB_USER,
  dbPassword: ENV.DB_PASSWORD,
  dbDatabase: ENV.DATABASE,
  dbPort: parseInt(ENV.DB_PORT),
};

export default appConfig;
