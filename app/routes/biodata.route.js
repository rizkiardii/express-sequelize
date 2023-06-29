const biodataController = require("../controllers/biodata.controller");
const router = require("express").Router();

router.post("/", biodataController.create);
router.get("/", biodataController.findAll);
router.put("/:id", biodataController.update);
router.put("/:id", biodataController.update);
router.delete("/:id", biodataController.delete);
router.get("/:id", biodataController.findOne);

module.exports = router;
