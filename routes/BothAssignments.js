const controllers = require("../controllers/Bothcreatecontrollers");
const checkAuth = require("../middleware/check-auth");
const addBothAssignments = controllers.addBothAssignments;
const getBothAssignments = controllers.getBothAssignments;
const getBothAssignmentsbyID = controllers.getBothAssignmentsbyID;

const routes = (app) => {
  app.route("/BothAssignments").get(
    (req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    },
    checkAuth,
    getBothAssignments
  );
  app
    .route("/BothAssignments/addBothAssignments")
    .post(checkAuth, addBothAssignments);
  app
    .route("/BothAssignments/:AssignmentID")
    .get(checkAuth, getBothAssignmentsbyID);
  // .get(getBothAssignments);
};

module.exports = routes;
