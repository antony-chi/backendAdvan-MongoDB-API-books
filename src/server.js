/*this file will include global settings about the server */
//importamos express from express y {json} para que permita usar json en req.body
import express, {json} from 'express';
//importamos las rutos
import indexRoutes from './routes/index.js'
import bookRoutes from './routes/books.js'

const app = express();

//setting - configuracion
app.set('port', 3000);


//Middlewares es una funcion que supervisa antes de acceder a la ruta ejemplo un token de acceso
app.use(json())

//Routes
app.use(indexRoutes)
app.use(bookRoutes)

export default app;