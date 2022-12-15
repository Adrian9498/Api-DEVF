import {Router} from 'express';
import {getCancion,
    getCancionesMasPopulares,
    getCancionesMenosPopulares,
    deleteCancion, 
    getTonalidadCancion} from '../controllers/cancion.controllers.js';
const router = Router();

router.get('/api/cancion', getCancion);
router.get('/api/most_popular/cancion', getCancionesMasPopulares);
router.get('/api/less_popular/cancion', getCancionesMenosPopulares);
router.delete('/api/cancion/:id', deleteCancion);
router.get('/api/cancion/tonalidad',  getTonalidadCancion);
//router.post('/api/artista', createArtista);

export default router;