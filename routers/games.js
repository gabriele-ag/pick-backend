import express from "express"
import gameController from "../controllers/gameController.js"

const router = express.Router()

router.get("/", gameController.index)

export default router