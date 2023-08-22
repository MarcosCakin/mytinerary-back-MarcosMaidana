import express from 'express';


const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        cities: [
            {name : 'Dublin'},
            {name : 'Berlin'}
        ]
    })
})

export default router;