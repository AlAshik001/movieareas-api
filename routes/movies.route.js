import express from "express"

const router = express.Router()

// R- for Reading
router.get('/', (req,res)=>{
    res.send("Get all movies lists");
})

// C-for creating movies

router.post('/',(req,res)=>{
    res.send("Create a movies");
})

// U- for updating movies
router.put('/:id', (req,res)=>{
    res.send("Update a movies ");
})

// D- for deleting movies
router.delete('/:id', (req,res)=>{
    res.send("Deleting a movies");
})

export default router
