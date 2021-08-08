const controllers = require("../controllers/vaccinationEvents");
const checkAuth = require("../middleware/check-auth");
const addvaccinationEvents = controllers.addvaccinationEvents;
const getvaccinationEvents = controllers.getvaccinationEvents;
const updateEvent = controllers.updateEvent;
const deleteEvent = controllers.deleteEvent;
const getvaccinationEventbyID = controllers.getvaccinationEventbyID;

const routes = (app) => {
  app.route("/vaccinationEvents").get(
    (req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    },
    checkAuth,
    getvaccinationEvents
  );
  app
    .route("/vaccinationEvents/addvaccinationEvents")
    .post(checkAuth, addvaccinationEvents);
  app
    .route("/vaccinationEvents/:EventID")
    .put(checkAuth, updateEvent)
    .delete(checkAuth, deleteEvent)
    .get(checkAuth, getvaccinationEventbyID);
};

module.exports = routes;
