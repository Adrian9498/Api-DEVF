import {Router} from 'express';
import {getCancion,getCancionesMasPopulares,getCancionesMenosPopulares} from '../controllers/cancion.controllers.js';
const router = Router();

router.get('/api/cancion', getCancion);
router.get('/api/most_popular/cancion', getCancionesMasPopulares);
router.get('/api/less_popular/cancion', getCancionesMenosPopulares);
//router.get('/api/artista/:nombre', searchArtista);
//router.post('/api/artista', createArtista);
export default router;