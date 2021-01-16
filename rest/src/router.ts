import express from "express"
import { randomCat, idCat, root } from "./handler"

const router = express.Router()

router.get("/rest/", randomCat)
router.get("/restId/:id", idCat)
router.get("/", root)

export { router }