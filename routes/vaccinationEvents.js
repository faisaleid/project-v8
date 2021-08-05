const controllers = require("../controllers/vaccinationEvents");
const checkAuth = require("../middleware/check-auth");
const addvaccinationEvents = controllers.addvaccinationEvents;

const routes = (app) => {
  app
    .route("/vaccinationEvents/addvaccinationEvents")
    .post(checkAuth, addvaccinationEvents);
};

module.exports = routes;
