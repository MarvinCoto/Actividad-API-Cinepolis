import express from "express"
import moviesController from "../controllers/moviesController.js"
import multer from "multer"

const router = express.Router();

//Configurar una carpeta loca que guarde
//el registro de las imagenes subidas
const upload = multer({dest: "public/"})

router.route("/")
.get(moviesController.getAllMovies)
.post(upload.single("image"), moviesController.insertMovies)

router.route("/:id")
.put(upload.single("image"), moviesController.updateMovies)
.delete(moviesController.deleteMovies)

export default router;