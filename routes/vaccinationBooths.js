const controllers = require("../controllers/VaccinationCreateControllers");
const checkAuth = require("../middleware/check-auth");
const addvaccinationBooths = controllers.addvaccinationBooths;
const getvaccinationBooths = controllers.getvaccinationBooths;
const getvaccinationBoothsbyID = controllers.getvaccinationBoothsbyID;
const updateBoth = controllers.updateBoth;
const deleteboth = controllers.deleteboth;

const routes = (app) => {
  app.route("/vaccinationBooths").get(
    (req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    },
    checkAuth,
    getvaccinationBooths
  );
  app
    .route("/vaccinationBooths/addvaccinationBooths")
    .post(checkAuth, addvaccinationBooths);
  app
    .route("/vaccinationBooths/:BothID")
    .get(checkAuth, getvaccinationBoothsbyID)
    .put(checkAuth, updateBoth)
    .delete(checkAuth, deleteboth);
};

module.exports = routes;
