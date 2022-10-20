import { Router } from "express";
import * as controllers from "../diseaseStates/controller.js";

const router = Router();

router.get("/", controllers.getDiseaseStates);
router.get("/:id", controllers.getDiseaseStateByID);
router.get("/name/:typeOfDisease", controllers.getDiseaseState);
router.post("/", controllers.createDiseaseState);
router.put("/:id", controllers.updateDiseaseState);
router.delete("/:id", controllers.deleteDiseaseState);

export default router;