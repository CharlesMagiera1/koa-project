import Router = require("koa-router");
import { F1Service } from "../services/f1service";
import { InMemoryF1Repository } from "../repositories/f1/inmemoryf1repository";


const router = new Router();
const service = new F1Service(new InMemoryF1Repository)

router.get('/f1', async (ctx) => {
    const f1 = await service.getF1();

    if (f1) {
        ctx.status = 200;
        ctx.body = f1;
    }else {
        ctx.throw(404);
    }

});

router.get('/f1/:year', async (ctx) => {
    const f1 = await service.getF1Year(Number(ctx.params.year));

    if (f1) {
        ctx.status = 200;
        ctx.body = f1;
    }else {
        ctx.throw(404);
    }
})

router.get('/f1/:year/circuits', async (ctx) => {
    const f1 = await service.getF1YearCircuits(Number(ctx.params.year));

    if (f1) {
        ctx.status = 200;
        ctx.body = f1;
    }else {
        ctx.throw(404);
    }
})

router.get('/f1/:year/:season', async (ctx) => {
    const f1 = await service.getF1Season(Number(ctx.params.year), Number(ctx.params.season));
    if (f1) {
        ctx.status = 200;
        ctx.body = f1;
    }else {
        ctx.throw(404);
    }
});

router.get('/f1/:year/:season/drivers', async (ctx) => {
    const f1 = await service.getF1Drivers(Number(ctx.params.year), Number(ctx.params.season));

    if (f1) {
        ctx.status = 200;
        ctx.body = f1;
    }else {
        ctx.throw(404);
    }
});

export default router;