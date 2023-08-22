import express from 'express';
import userRouter from './user.router.js';
import cityRouter from './city.router.js';

const router = express.Router();
//req (required) objeto solicitud
//res (response) objeto respuesta
router.get('/', (req, res) => {
    res.send('hello world')
});

router.use('/users', userRouter);

router.use('/cities', cityRouter);

export default router;