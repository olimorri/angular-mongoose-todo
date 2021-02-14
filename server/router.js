const Router = require('koa-router');
const router = new Router();
const { getTodos, postTodo } = require('./controllers/todoController');

router.get('/todo', getTodos);
router.post('/todo', postTodo);
