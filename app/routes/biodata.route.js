const biodataController = require("../controllers/biodata.controller");
const router = require("express").Router();

router.get("/biodata", biodataController.findAll);
router.post("/biodata/create", biodataController.create);
router.put("/biodata/update:id", biodataController.update);
router.delete("/biodata/delete/:id", biodataController.delete);
router.get("/biodata/:id", biodataController.findOne);

module.exports = router;
