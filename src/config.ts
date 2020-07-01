import { config } from "https://deno.land/x/dotenv/mod.ts";

const ENV = config();

interface App {
  port: number;
}
interface DatabaseConfig {
  hostname: string;
  user: string;
  password: string;
  database: string;
  port: number;
}

interface RedisConfig {
  hostname: string;
  port: number;
}

const databaseConfig: DatabaseConfig = {
  hostname: ENV.DB_HOSTNAME,
  user: ENV.DB_USER,
  password: ENV.DB_PASSWORD,
  database: ENV.DB_DATABASE,
  port: parseInt(ENV.DB_PORT),
};

const redisConfig: RedisConfig = {
  hostname: ENV.CACHE_HOSTNAME,
  port: parseInt(ENV.CACHE_PORT)
}

const appConfig: App = {
  port: parseInt(ENV.PORT) || 8000,
};

export { 
  databaseConfig as DatabaseConfig,
  redisConfig as RedisConfig
 };
export default appConfig;
