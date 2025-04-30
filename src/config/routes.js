const express = require("express");
const router = express.Router();
const controller = require("../api/billingCycle/billingCycleController");

// Rotas CRUD
router.get("/billingCycles", controller.getAll);
router.post("/billingCycles", controller.create);
router.put("/billingCycles/:id", controller.update);
router.delete("/billingCycles/:id", controller.delete);

router.get('/billingCycles/count', controller.count);
router.get('/billingCycles/summary', controller.getSummary);

module.exports = router;


