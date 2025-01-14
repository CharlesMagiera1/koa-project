import * as Koa from 'koa';
import * as Router from 'koa-router';
import logger = require('koa-logger');
import taskRouter from './routes/tasks';
import f1Router from './routes/f1';
import exerciseRouter from './routes/exercise';
import bodyParser = require('koa-bodyparser');
import { ExerciseService } from './services/exerciseservice';

const app = new Koa();
const router = new Router();

app.use(logger());
app.use(bodyParser());

router.get('/', async (ctx) => {
    ctx.body = 'Welcome to my koa App.';
});

app.use(router.routes());
app.use(taskRouter.routes());
app.use(f1Router.routes());
app.use(exerciseRouter.routes());

app.listen(3000);

console.log('My Koa server is up and listening on port 3000');