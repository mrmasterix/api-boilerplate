import * as Router from 'koa-router';
import { infoRouter } from './info';

const router = new Router();

router.use(infoRouter.routes());

export {
  router,
};
