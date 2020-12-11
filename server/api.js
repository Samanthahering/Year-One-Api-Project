const router = require('express').Router();

router.use('/movies', require('./movies')); // matches all requests to /api/movies/
router.use('/ratings', require('./ratings')); // matches all requests to /api/ratings/

module.exports = router;



