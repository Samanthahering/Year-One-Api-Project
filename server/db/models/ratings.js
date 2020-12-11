const Sequelize = require('sequelize')
const db = require('../db')

const Ratings = db.define('ratings', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    thumbsup: {
        type: Sequelize.INTEGER
    },
    thumbsdown: {
        type: Sequelize.INTEGER
    }
})

module.exports = Ratings