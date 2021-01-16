import express from "express"
import { router } from "./router"
import cors from "cors"

const app = express()

app.use(cors())
app.use("/", router)

app.listen(5050, () => { console.log("catAPI on http://localhost:5050") })