const express = require("express");
const router = express.Router();
const controller = require("../api/billingCycle/billingCycleController");

// Rotas CRUD
router.get("/billingCycles", controller.getAll);
router.post("/billingCycles", controller.create);
router.put("/billingCycles/:id", controller.update);
router.delete("/billingCycles/:id", controller.delete);

module.exports = router;


