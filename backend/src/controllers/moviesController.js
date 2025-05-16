import moviesModel from "../models/Movies.js"
import { v2 as cloudinary } from "cloudinary"

import { config } from "../config.js"

//1- Configurar cloudinary
cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret
})

//Array de funciones vacío
const moviesController = {};

//SELECT
moviesController.getAllMovies = async(req, res) => {
    const movies = await moviesModel.find();
    res.json(movies);
}

//INSERT
moviesController.insertMovies = async (req, res) => {
    try {
        
    /*
   Campos:
       title
       description
       director
       gender
       year
       duration
       image
    */
    
    const { title, description, director, gender, year, duration } = req.body;
    let imageURL = ""

    //Subir la imagen a Cloudinary
    if(req.file){
        const result = await cloudinary.uploader.upload(
            req.file.path,
            {
                folder: "public",
                allowed_formats: ["png", "jpg", "jpeg"]
            }
        )
        //Guardo en la variable la URL de donde se subió la imagen
        imageURL = result.secure_url
    }

    //Guardar todo en la base de datos
    const newMovie = new moviesModel({title, description, director, gender, year, duration, image: imageURL})
    await newMovie.save()

    res.json({message: "Movie saved"});

} catch (error) {
        console.log(error)
}

}

// DELETE
moviesController.deleteMovies = async (req, res) => {
    await moviesModel.findOneAndDelete(req.params.id)
    res.json({ message: "movie deleted"})
}

moviesController.updateMovies = async (req, res) => {
    //Solicito todos los valores 
    const {title, description, director, gender, year, duration, image: imageURL} = req.body;
    //Actualizo
    await moviesModel.findByIdAndUpdate(req.params.id, {title, description, director, gender, year, duration, image: imageURL}, {new: true});
    //Muestro un mensaje que todo se actualizó
    res.json({message: "movie updated"});
};



export default moviesController;