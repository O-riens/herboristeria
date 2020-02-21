const cors = require('cors')
const express = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get    ("/nombre",      cors(), controller.readClientes);   // Read All
router.get    ("/nombre/:id",  cors(), controller.readCliente);    // Read
router.delete ("/nombre/:id",  cors(), controller.deleteCliente);  // Delete
router.put    ("/nombre/:id",  cors(), controller.updateCliente);  // Update
router.post   ("/nombre",      cors(), controller.createCliente);  // Create

router.get    ("/categoria",     cors(), controller.readArticulos);  // Read All
router.get    ("/categoria/:id", cors(), controller.readArticulo);   // Read
router.delete ("/categoria/:id", cors(), controller.deleteArticulo); // Delete
router.put    ("/categoria/:id", cors(), controller.updateArticulo); // Update
router.post   ("/categoria",     cors(), controller.createArticulo); // Create


module.exports = router;
