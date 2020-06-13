import { config } from "https://deno.land/x/dotenv/mod.ts";

const ENV = config();
interface App {
  port: number;
  databaseConfig: DatabaseConfig,
}
interface DatabaseConfig {
  hostname:string,
  user: string,
  password: string,
  database: string,
  port: number,
}

const databaseConfig: DatabaseConfig = {
  hostname: ENV.DB_HOSTNAME,
  user: ENV.DB_USER,
  password: ENV.DB_PASSWORD,
  database: ENV.DB_DATABASE,
  port: parseInt(ENV.DB_PORT),
}

const appConfig: App = {
  port: parseInt(ENV.PORT) || 8000,
  databaseConfig,
};

export {databaseConfig as DatabaseConfig}
export default appConfig;
