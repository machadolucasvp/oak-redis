import { Client } from "../deps.ts";
import { DatabaseConfig } from "../config.ts";

const client: Client = new Client(DatabaseConfig);

try {
  await client.connect();
} catch (error) {
  console.log(error.stack);
  throw error;
}

export default client;
