import { Client } from "https://deno.land/x/postgres/mod.ts";
import config from '../config.ts';

const client: Client = new Client(config);

try{
    await client.connect();
}catch(error) {
    console.log(error.stack);
    throw error;
}

export default client;