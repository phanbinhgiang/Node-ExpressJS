const express = require('express');
const router = express.Router();
const {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  editTask,
  deleteTask,
} = require('../controller/tasks');

router.route('/').get(getAllTasks).post(createTask);
router
  .route('/:id')
  .get(getSingleTask)
  .patch(updateTask)
  .put(editTask)
  .delete(deleteTask);

module.exports = router;
