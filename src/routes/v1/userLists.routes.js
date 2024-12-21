import express from 'express';
const router = express.Router();
import userAuthMiddleware from '../../middlewares/userAuth.middleware.js';
import { addAnimeToList, addGameToList, addMovieToList } from '../../controllers/userLists.controller.js';
import {
    updateAnimeInList,
    updateGameInList,
    updateMovieInList,
    removeAnimeFromList,
    removeGameFromList,
    removeMovieFromList,
  } from '../../controllers/userLists.controller.js';

router.post('/anime/add', userAuthMiddleware, addAnimeToList);
router.post('/games/add', userAuthMiddleware, addGameToList);
router.post('/movies/add',userAuthMiddleware, addMovieToList);


// Update routes
router.patch('/anime/update/:id', userAuthMiddleware, updateAnimeInList);
router.patch('/games/update/:id', userAuthMiddleware, updateGameInList);
router.patch('/movies/update/:id', userAuthMiddleware, updateMovieInList);

// Remove routes
router.delete('/anime/remove/:id', userAuthMiddleware, removeAnimeFromList);
router.delete('/games/remove/:id', userAuthMiddleware, removeGameFromList);
router.delete('/movies/remove/:id', userAuthMiddleware, removeMovieFromList);

export default router;