import * as Router from 'koa-router';
import { AppDatabase } from '../../db';
import { ENTITY_ENUM } from '../../entities/common/entity-list';


export const infoRouter = new Router();

infoRouter.get('/info', async (ctx) => {
  ctx.body = {
    app: {
      status: 'ok',
    },
    database: {
      testConnection: {
        status: await new AppDatabase().connectionStatus(),
      }
    },
  };
});

infoRouter.get('/entities', async (ctx) => {
  ctx.body = ENTITY_ENUM;
});
