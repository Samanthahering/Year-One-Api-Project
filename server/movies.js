//third party api
const unirest = require("unirest");
const router = require('express').Router()

router.get('/:id', async(req, res, next) => {
    unirest.get(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${req.params.id}`).headers({
        	"x-rapidapi-key": "f205866adcmsh67fd61adef16fb8p1b04aajsn87e938cee808",
        	"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
        	"useQueryString": true
        }).end((response) => {
        res.status(200).send(response)

    })
    
})

module.exports = router


//first attempt 
// var req = unirest("GET", 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/inception');

// req.headers({
// 	"x-rapidapi-key": "f205866adcmsh67fd61adef16fb8p1b04aajsn87e938cee808",
// 	"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
// 	"useQueryString": true
// });

// //sending back request
// req.end(function (res) {
//     if (res.error) throw new Error(res.error);


// 	console.log(res.body);
// });

// module.exports = unirest;