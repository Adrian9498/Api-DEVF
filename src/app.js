import  express  from "express";
//import  animeRoutes  from "./routes/anime.routes.js";


const app = express();

app.use(express.json());

//app.use(animeRoutes);

export default app;