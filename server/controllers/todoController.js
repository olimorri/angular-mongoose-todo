const { Todo } = require('../models/todoModel');

exports.getTodos =  async (ctx) => {
  try {
    ctx.body = await Todo.find({});
      ctx.status = 200;
  } catch (err) {
    console.log(err)
  }
}

exports.postTodo = async (ctx) => {
  try {
    let newTodo = ctx.request.body;
    const todo = await Todo.create(newTodo);
    ctx.status = 200;
  } catch (err) {
    console.log(err);
  }
}