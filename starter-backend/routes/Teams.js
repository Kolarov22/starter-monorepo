import express from "express";
import {
  getAllTeams,
  getTeamByName,
  createTeam,
  voteForTeam,
  populateDb,
} from "../controllers/team.controller.js";

const router = express.Router();

router.get("/", getAllTeams);
router.get("/:name", getTeamByName);
router.post("/", createTeam);
router.post("/:name/vote", voteForTeam);
router.post("/populate", populateDb);

export { router as teamsRouter };
