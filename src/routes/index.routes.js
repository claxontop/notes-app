import { Router } from "express";
import { renderIndex, renderAbout,renderPrueba } from "../controllers/index.controller";

const router = Router();

router.get("/", renderIndex);
router.get("/about", renderAbout);
router.get("/prueba", renderPrueba);

export default router;
