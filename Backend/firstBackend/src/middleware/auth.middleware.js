export const sampleMiddleWare = async (req, res, next) => {
  console.log("I am Sample Middleware1");
  next();
};
export const sampleMiddleWare2 = async (req, res, next) => {
  console.log("I am Sample Middleware2");
  next();
};
