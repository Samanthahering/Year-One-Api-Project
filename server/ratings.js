const router = require('express').Router()
const Ratings = require('./db/models/ratings')

router.get('/', async(req, res, next) => {
    try {
        let ratings = await Ratings.findAll()
        res.json(ratings)
    } catch (error) {
        next(error)
    }
})

router.post('/:title', async(req, res, next) => {
    try {
        const checkTitle = await Ratings.findById(req.params.title)
        if(checkTitle){
            console.log('okay')

        }else{
            const newTitle = await Ratings.create(req.params.title)
            res.json(newTitle)
        }

        
    } catch (error) {
        next(error)
    }
})

module.exports = router 