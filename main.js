import express from "express"
const app =  express()
const port = 3000

app.get("/", (req,res) =>{
    res.json({msg: "Hello Studends"})
})


app.listen(port, ()=>{
    console.log(`The server is running at http//localhost:${port}`);
})

// DRY principle = Don't repeat again the code
// KISS principle = Keep it so simple