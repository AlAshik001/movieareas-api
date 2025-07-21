import express from "express"
import { MovieCreate, MovieDelete, MovieIndex, MovieUpdate } from "../controllers/movies.controller.js";

const router = express.Router()

// R- for Reading
router.get('/', MovieIndex)

// C-for creating movies

router.post('/',MovieCreate)

// U- for updating )

router.put('/:id',MovieUpdate)

// D- for deleting movies
router.delete('/:id', MovieDelete)

export default router
