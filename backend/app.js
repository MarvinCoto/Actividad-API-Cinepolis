// Importo todo lo de la librería de Express
import express from "express";
import cookieParser from "cookie-parser";

import registerClientsRoutes from "./src/routes/registerClients.js";

//Creo una constante que es igual a la librería que importé
const app = express();

//Que acepte datos en json
app.use(express.json());

//Que postman acepte guardar cookies
app.use(cookieParser());

//Definimos las rutas de las funciones que tendrá la página web

app.use("/api/registerClients", registerClientsRoutes)


//Exporto la constante para poder usar express en otros archivos
export default app;