

// CURD functionality of movies
// MVC pattern called Module View Controllers

import Movie from "../models/movie.model.js";

export const MovieIndex =  (req,res)=>{
    res.send("Get all movies lists");
}

export const MovieCreate = async (req,res)=>{
    // id, title , descr
       

       

        // Validate your data
   const newMovie = new Movie({
            title: req.body.title,
            desc: req.body.desc
        })

    try {
         const movie = await newMovie.save()
         return res.status(201).json(movie)
    } catch (error) {
        return res.status(400).json({message: error.message})
    } 
}

export const MovieUpdate =  (req,res)=>{
    res.send("Update a movies ");
}

export const MovieDelete = (req,res)=>{
    res.send("Deleting a movies");
}