const authMiddleware = (req, res, next) => {
 
    if (req.cookies['user']) {
       const USER = JSON.parse(req.cookies['user']);
    req.user = USER;
      }
 
  next();
};
module.exports = { authMiddleware };
