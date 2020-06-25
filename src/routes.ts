import { Router } from "./deps.ts";
import ProductController from "./controllers/product.controller.ts";

const router = new Router();

router.get("/api/products", (ctx: any) => ProductController.getAll(ctx));

export default router;
