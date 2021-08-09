const controllers = require("../controllers/vaccinationCenters");
const checkAuth = require("../middleware/check-auth");
const addvaccinationCenters = controllers.addvaccinationCenters;
const getvaccinationCenters = controllers.getvaccinationCenters;
const vaccinationCentersbyID = controllers.vaccinationCentersbyID;
const updatecenter = controllers.updatecenter;
const deletecenter = controllers.deletecenter;

const routes = (app) => {
  app.route("/vaccinationCenters").get(
    (req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    },
    checkAuth,
    getvaccinationCenters
  );
  app
    .route("/vaccinationCenters/addvaccinationCenters")
    .post(checkAuth, addvaccinationCenters);
  app
    .route("/vaccinationCenters/:centerID")
    .get(checkAuth, vaccinationCentersbyID)
    .put(checkAuth, updatecenter)
    .delete(checkAuth, deletecenter);
};

module.exports = routes;
