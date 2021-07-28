const controllers = require("../controllers/VaccinationCreateControllers");
const addvaccinationBooths = controllers.addvaccinationBooths;
const getvaccinationBooths = controllers.getvaccinationBooths;
const getvaccinationBoothsbyID = controllers.getvaccinationBoothsbyID;
const updateBoth = controllers.updateBoth;
const deleteboth = controllers.deleteboth;

const routes = (app) => {
  app.route("/vaccinationBooths").get((req, res, next) => {
    // middleware
    console.log(`Request from: ${req.originalUrl}`);
    console.log(`Request type: ${req.method}`);
    next();
  }, getvaccinationBooths);
  app
    .route("/vaccinationBooths/addvaccinationBooths")
    .post(addvaccinationBooths);
  app
    .route("/vaccinationBooths/:BothID")
    .get(getvaccinationBoothsbyID)
    .put(updateBoth)
    .delete(deleteboth);
};

module.exports = routes;
