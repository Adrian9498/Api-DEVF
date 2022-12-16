import {Router} from 'express';
import { getAlbum, searchAlbum , createAlbum, deleteAlbum } from '../controllers/album.controllers.js';

const router = Router();

router.get('/api/album', getAlbum);

router.get('/api/album/:nombre', searchAlbum);

router.post('/api/album', createAlbum);

router.delete('/api/album/:id', deleteAlbum);

//router.put('/api/:id', updateAlbum);

//router.delete('/api/:id', deleteAlbum);


export default router;