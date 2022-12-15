import {Router} from 'express';
import { getEmotional_specs, createEmotional_Specs, deleteEmotional_Specs,  } from '../controllers/emotional_specs.controllers.js';

const router = Router();

router.get('/api/emotional_specs', getEmotional_specs);

router.post('/api/emotional_specs', createEmotional_Specs);

//router.put('/api/:id', updateEmotional_Specs);

router.delete('/api/emotional_specs/delete/:id_emotional_specs', deleteEmotional_Specs);

export default router;