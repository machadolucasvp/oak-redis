import { Router } from "./deps.ts";
import ProductController from "./controllers/product.controller.ts";

const router = new Router();

router.get("/api/products", (ctx: any) => ProductController.getAll(ctx));
router.get("/api/products/:id", (ctx: any) => ProductController.get(ctx));
router.post("/api/products", (ctx: any) => ProductController.post(ctx));
router.put("/api/products/:id", (ctx: any) => ProductController.put(ctx));
router.delete("/api/products/:id", (ctx: any) => ProductController.delete(ctx));

export default router;
