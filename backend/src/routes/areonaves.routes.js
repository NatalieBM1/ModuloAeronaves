const router = require("express").Router();
const ctrl = require("../controllers/aeronaves.controller");

router.post("/", ctrl.create);
router.get("/", ctrl.findAll);
router.get("/:id", ctrl.findOne);
router.put("/:id", ctrl.update);
router.delete("/:id", ctrl.remove);

module.exports = router;
