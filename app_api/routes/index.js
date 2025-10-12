const express = require("express");  // Express app
const router = express.Router();  // Router logic
const { expressjwt: jwt } = require('express-jwt'); // Middleware for validating JWTs
const authenticateJWT = jwt({
    secret: process.env.JWT_SECRET, // Secret stored in .env file
    algorithms: ['HS256'],  // Algorithm used to sign the JWT
    userProperty: 'payload' // Attach the payload to req.payload
});

// This is where we import the controllers we will route
const tripsController = require("../controllers/trips");
const authController = require('../controllers/authentication');

router.route('/register').post(authController.register);
router.route('/login').post(authController.login);

router
    .route("/trips")
    .get(tripsController.tripsList)  // GET method routes tripList
    .post(tripsController.tripsAddTrip)  // POST method adds a trip
    .post(authenticateJWT, tripsController.tripsAddTrip); // POST method adds a trip only if authenticated

// GET method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip)  // PUT method updates a trip
    .put(authenticateJWT, tripsController.tripsUpdateTrip) // PUT method updates a trip only if authenticated
    .delete(tripsController.tripsDeleteTrip)  // DELETE method deletes a trip
    .delete(authenticateJWT, tripsController.tripsDeleteTrip); // DELETE method deletes a trip only if authenticated
    
module.exports = router;