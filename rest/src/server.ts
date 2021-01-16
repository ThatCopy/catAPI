import express from "express"
import { router } from "./router"

const app = express()

app.use("/", router)

app.listen(5050, () => { console.log("catAPI on http://localhost:5050") })