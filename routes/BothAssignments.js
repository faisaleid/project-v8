const controllers = require("../controllers/Bothcreatecontrollers");
const addBothAssignments = controllers;
//const getBothAssignments = controllers.getBothAssignments;
//const getBothAssignmentsbyID = require("../controllers/controllers");

const routes = (app) => {
  // app.route("/BothAssignments").get((req, res, next) => {
  //   // middleware
  //   console.log(`Request from: ${req.originalUrl}`);
  //   console.log(`Request type: ${req.method}`);
  //   next();
  // }, getBothAssignments);
  app.route("/BothAssignments/addBothAssignments").post(addBothAssignments);
  // .get(getBothAssignments);
};

module.exports = routes;
