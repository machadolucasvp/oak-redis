import { Router } from 'https://deno.land/x/oak/mod.ts';
import ProductController from './controllers/ProductController.ts';

const router = new Router()

router.get('/api/products', (ctx: any) => ProductController.getAll(ctx));

export default router