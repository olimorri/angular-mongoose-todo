const Koa = require('koa');
const app = new Koa();
//TODO: add router - const router = require('./router')
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const cors = require('@koa/cors');

const port = 3000;
app.use(cors());
app.use(bodyParser());
//TODO: enable this once router is sorted app.use(router.routes());

app.listen(port, () => {
  //TODO: mongoose.connect()
  console.log(`Server up and running at http://localhost:${port} 🚀🧨`); 
})

