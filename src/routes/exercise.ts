import Router = require("koa-router");
import { ExerciseService } from "../services/exerciseservice";
import { InMemoryExerciseRepository } from "../repositories/exercise/inmemoryexerciserepository";


const router = new Router();
const service = new ExerciseService(new InMemoryExerciseRepository)


router.get('/exo', async (ctx) => {
    let  queryParam = ctx.query;

    if (queryParam) {
        const exo = await service.getSpecificExercise(queryParam);
        ctx.status = 200;
        ctx.body = exo;
    }

});

export default router;