import React from 'react'
import { connect } from 'react-redux'
import {fetchRatings} from '../store'


class MovieInfo extends React.Component {
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        event.preventDefault()
        console.log('this was clicked')
        this.props.getRatings()

    }
    render(){
        console.log('SINGLE PROPS', this.props)
        let newArray = this.props.movies.body.titles.filter((movie) => {
            console.log('movie', movie.title === this.props.match.params.title)
            return movie.title === this.props.match.params.title
        })
        console.log('array', newArray)
        return(
            <div className='main-div'>
                <h1>Movie Info!</h1>
                    <p>{newArray[0].title}</p>
                    <div className='thumbs-outer'>
                            <a href='#' onClick={this.handleClick}>Thumbs Up</a>
                            <a href='#' onClick={this.handleClick}>Thumbs Down</a>
                    </div>
                    <img src={newArray[0].image}/>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        movies: state.movies,
    }
}

const mapDispatch = (dispatch) => {
    return {
        getRatings: () => dispatch(fetchRatings())
    }
}
export default connect(mapState, mapDispatch)(MovieInfo)