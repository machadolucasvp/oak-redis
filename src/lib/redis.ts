import { Connect } from "../deps.ts";
import { RedisConfig } from "../config.ts";

const redis = await Connect(RedisConfig);

export default redis;
