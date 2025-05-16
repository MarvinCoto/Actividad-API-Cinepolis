// Importo todo lo de la librería de Express
import express from "express";
import cookieParser from "cookie-parser";

import registerClientsRoutes from "./src/routes/registerClients.js";
import registerEmployeesRoutes from "./src/routes/registerEmployees.js"
import loginRoutes from "./src/routes/login.js"
import logoutRoutes from "./src/routes/logout.js"
import recoveryPasswordRoutes from "./src/routes/recoveryPassword.js"
import moviesRoutes from "./src/routes/movies.js"
import clientsRoutes from "./src/routes/clients.js"
import employeesRoutes from "./src/routes/employees.js"

//Creo una constante que es igual a la librería que importé
const app = express();

//Que acepte datos en json
app.use(express.json());

//Que postman acepte guardar cookies
app.use(cookieParser());

//Definimos las rutas de las funciones que tendrá la página web

app.use("/api/registerClients", registerClientsRoutes)
app.use("/api/registeEmployees", registerEmployeesRoutes)

app.use("/api/login", loginRoutes)
app.use("/api/logout", logoutRoutes)

app.use("/api/recoveryPassword", recoveryPasswordRoutes); 

app.use("/api/movies", moviesRoutes)

app.use("/api/clients", clientsRoutes)
app.use("/api/employees", employeesRoutes)


//Exporto la constante para poder usar express en otros archivos
export default app;