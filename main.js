import express from "express"
import movieRoutes from "./routes/movies.route.js"
import connectDB from "./lib/db.js"
const app =  express()
const port = 3000

app.get("/", (req,res) =>{
    res.json({msg: "Hello Studends !!"})
})



// CURD functionality of movies

// Connect DB Function

connectDB()

app.use('/movies',movieRoutes)


app.listen(port, ()=>{
    console.log(`The server is running at http//localhost:${port}`);
})



// DRY principle = Don't repeat again the code
// KISS principle = Keep it so simple