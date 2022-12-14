import {Router} from 'express';
import { getArtista,searchArtista,createArtista,getMostPopularArtistas} from '../controllers/artista.controllers.js';
const router = Router();

router.get('/api/artista', getArtista);
router.get('/api/artista/:nombre', searchArtista);
router.post('/api/artista', createArtista);
router.get('/api/most_popular/artista', getMostPopularArtistas);

//router.put('/projects/:id', updateProject);

//router.delete('/projects/:id', deleteProject);

export default router;