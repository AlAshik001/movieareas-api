// MVC pattern called Module View Controllers

export const MovieIndex =  (req,res)=>{
    res.send("Get all movies lists");
}

export const MovieCreate = (req,res)=>{
    res.send("Create a movies");
}

export const MovieUpdate =  (req,res)=>{
    res.send("Update a movies ");
}

export const MovieDelete = (req,res)=>{
    res.send("Deleting a movies");
}