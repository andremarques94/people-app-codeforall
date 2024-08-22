import { Router } from "express";
import { getAllPeople, personDetails } from "./people.controller";

const router = Router();

router.get("/people", getAllPeople);
router.get("/people/:id", personDetails);

export default router;
