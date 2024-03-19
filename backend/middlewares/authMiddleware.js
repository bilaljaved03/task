const authMiddleware = (req, res, next) => {
 
    if (req.cookies['user']) {
        req.user = req.cookies['user'];
      }
 
  next();
};
module.exports = { authMiddleware };
