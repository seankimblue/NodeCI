const { clearHash } = require('../services/cache');

module.exports = async (req, res, next) => {
  // allows the route handler to do its work,
  // before doing its work
  await next();

  clearHash(req.user.id);
};
