const customError = (ID) => {
  const error = new Error(`Not Found Task ${ID}`);
  error.status = 404;
  return error;
};

module.exports = customError;
