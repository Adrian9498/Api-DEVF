import {Router} from 'express';
import { getEmotional_specs, createEmotional_Specs } from '../controllers/emotional_specs.controllers.js';

const router = Router();

router.get('/api/emotional_specs', getEmotional_specs);

router.post('/api/emotional_specs', createEmotional_Specs);

//router.put('/api/:id', updateAlbum);

//router.delete('/api/:id', deleteAlbum);

export default router;