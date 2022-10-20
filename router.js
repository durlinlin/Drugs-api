import { Router } from "express";
import diseasesRoutes from "./diseaseStates/router.js";
import drugsRoutes from "./drugs/router.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/diseaseStates", diseasesRoutes);
router.use("/drugs", drugsRoutes);

export default router;