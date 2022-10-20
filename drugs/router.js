import { Router } from "express";
import * as controllers from "../drugs/controller.js";

const router = Router();

router.get("/", controllers.getDrugs);
router.get("/:id", controllers.getDrugById);
router.get("/genericName/:genericDrugName", controllers.getGenericDrug);
router.get("/brandName/:brandDrugName", controllers.getBrandDrug);
router.post("/", controllers.createDrug);
router.put("/:id", controllers.updateDrug);
router.delete("/:id", controllers.deleteDrug);

export default router;