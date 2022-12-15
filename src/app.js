import  express  from "express";
import  artistaRoutes  from "./routes/artista.routes.js";
import  cancionRoutes  from "./routes/cancion.routes.js";
import  albumRoutes  from "./routes/album.routes.js"
import emotional_specs  from "./routes/emotional_specs.routes.js"


const app = express();

app.use(express.json());

app.use(artistaRoutes);
app.use(cancionRoutes);
app.use(albumRoutes);
app.use(emotional_specs);

export default app;