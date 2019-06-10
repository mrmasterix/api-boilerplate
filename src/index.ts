import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

import * as Koa from 'koa';
import * as koaBody from 'koa-body';
import { router } from './routes';
import { port } from './config';

const app: Koa = new Koa();

app.use(koaBody());
app.use(router.routes());
app.listen(port);
console.log(`Server running on port ${port}`);
