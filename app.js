import express from "express"
import cors from "cors"
import "dotenv/config";

const app = express()
const port = 5174

app.use(express.json())
app.use(express.static("public"))
app.use(cors({ origin: process.env.FE_URL }));