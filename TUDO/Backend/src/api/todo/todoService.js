const Todo = require('./todo'); //registro do metodo Schema

/**
 * @api {get} /task List all tasks
 * @apiGroup Tasks
 *
 *
 * @apiSuccess {Object[]} tasks Task's list
 * @apiSuccess {Number} tasks.id Task id
 * @apiSuccess {String} tasks.title Task title
 * @apiSuccess {Boolean} tasks.done Task is done ?
 * @apiSuccess {Date} tasks.update_at Update's date
 * @apiSuccess {Date} tasks.created_at Register's date
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     [{
 *       "id": 1,
 *       "title": "Study",
 *       "done": false,
 *       "update_at": "2020-02-10T15:46:51.778Z",
 *       "created_at":"2020-02-10T15:46:51.778Z"
 *     }]
 *
 *
 * @apiErrorExample {json} Error
 *     HTTP/1.1 500 Internal Server Error
 *     
 */

Todo.methods(['get', 'post', 'put', 'delete']); //registrando requisicoes
Todo.updateOptions({runValidators: true});


module.exports = Todo;