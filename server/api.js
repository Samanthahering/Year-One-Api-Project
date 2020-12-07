const router = require('express').Router();

router.use('/movies', require('./movies')); // matches all requests to /api/movies/

module.exports = router;



