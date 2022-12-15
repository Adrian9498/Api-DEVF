import {Router} from 'express';
import { getArtista,searchArtista,createArtista,getMostPopularArtistas,getLessPopularArtistas,deleteArtista} from '../controllers/artista.controllers.js';
const router = Router();

router.get('/api/artista', getArtista);
router.get('/api/artista/:nombre', searchArtista);
router.post('/api/artista', createArtista);
router.get('/api/most_popular/artista', getMostPopularArtistas);
router.get('/api/less_popular/artista', getLessPopularArtistas);

//router.put('/projects/:id', updateProject);

router.delete('/api/artista/:id', deleteArtista);

export default router;