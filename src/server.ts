import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";
import config from "./config.ts";
import ReponseHandler from "./middlewares/response.ts";

const app = new Application();

app.use(ReponseHandler);
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Running on port ${config.port}`);

await app.listen({ port: config.port });
