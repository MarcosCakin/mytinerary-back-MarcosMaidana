import 'dotenv/config.js';
import './config/db.js'
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRouter from './router/index.router.js'

const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(cors());    


app.use((req, res, next) => {
    console.log('Se ejecuto el middleware que hice')
    
    // res.status(200).send('Middleware a nivel de aplicacion')
    
    next()
});
app.use('/api', indexRouter);

app.listen(PORT, () => console.log('Server running on port: ' + PORT));