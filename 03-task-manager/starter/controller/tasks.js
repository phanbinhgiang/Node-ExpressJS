const getAllTasks = (req, res) => {
  res.send(`All Items from the file`);
};

const getTask = (req, res) => {
  res.send(`get task`);
};

const createTask = (req, res) => {
  res.json(req.body);
};

const updateTask = (req, res) => {
  console.log(req.params);
  res.send(`update task`);
};

const deleteTask = (req, res) => {
  res.send(`delete task`);
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
