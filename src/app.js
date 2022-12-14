import  express  from "express";
import  artistaRoutes  from "./routes/artista.routes.js";
import  cancionRoutes  from "./routes/cancion.routes.js";


const app = express();

app.use(express.json());

app.use(artistaRoutes);
app.use(cancionRoutes);

export default app;