

// CURD functionality of movies
// MVC pattern called Module View Controllers

export const MovieIndex =  (req,res)=>{
    res.send("Get all movies lists");
}

export const MovieCreate = (req,res)=>{
    // id, title , descr
        console.log(req.body)

        return res.json(req.body)
    // create the movie info 
}

export const MovieUpdate =  (req,res)=>{
    res.send("Update a movies ");
}

export const MovieDelete = (req,res)=>{
    res.send("Deleting a movies");
}