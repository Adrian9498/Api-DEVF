import {Router} from 'express';
import { getAlbum, searchAlbum , createAlbum } from '../controllers/album.controllers.js';

const router = Router();

router.get('/api/album', getAlbum);

router.get('/api/album/:nombre', searchAlbum);

router.post('/api/album', createAlbum);

//router.put('/api/:id', updateAlbum);

//router.delete('/api/:id', deleteAlbum);


export default router;