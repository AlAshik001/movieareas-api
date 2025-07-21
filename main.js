import express from "express"
const app =  express()
const port = 3000

app.get("/", (req,res) =>{
    res.json({msg: "Hello Studends"})
})



// CURD functionality of movies

// R- for Reading
app.get('/movie', ()=>{

})

// C-for creating movies

app.post('movies',()=>{

})

// U- for updating movies
app.put('/movies/:id', ()=>{

})

// D- for deleting movies
app.delete('/movies/:id', ()=>{

})


app.listen(port, ()=>{
    console.log(`The server is running at http//localhost:${port}`);
})



// DRY principle = Don't repeat again the code
// KISS principle = Keep it so simple