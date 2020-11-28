module.exports = function (app) {
  const userRoutes = require("./user.routes");

  app.use("/user", userRoutes);

  app.get("/", function (req, res) {
    res.json({
      application: "PSC API",
      version: "1.0",
    });
  });
};