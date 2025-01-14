import Router = require("koa-router");
import { ExerciseService } from "../services/exerciseservice";
import { InMemoryExerciseRepository } from "../repositories/exercise/inmemoryexerciserepository";


const router = new Router();
const service = new ExerciseService(new InMemoryExerciseRepository)

router.get('/exo', async (ctx) => {
    const exo = await service.getExercise();

    if (exo) {
        ctx.status = 200;
        ctx.body = exo;
    }else {
        ctx.throw(404)
    }

});

export default router;