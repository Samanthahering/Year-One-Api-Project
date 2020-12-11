const db = require('./server/db/db')
const Ratings = require('./server/db/models/ratings')

async function seed(){
    await db.sync({force: true})
    console.log('db synced!')

    const ratings = await Promise.all([
        Ratings.create({title: 'movie-test', thumbsup: 2, thumbsdown: 20}),
        Ratings.create({title: 'movie-test1', thumbsup: 50, thumbsdown: 7})
        
    ])
}

async function runSeed() {
    console.log('seeding...')
    try {
      await seed()
    } catch (err) {
      console.error(err)
      process.exitCode = 1
    } finally {
      console.log('closing db connection')
      await db.close()
      console.log('db connection closed')
    }
  }

  if (module === require.main) {
    runSeed()
  }

  module.exports = seed