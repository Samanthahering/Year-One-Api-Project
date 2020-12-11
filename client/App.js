import React from 'react'
import {connect} from 'react-redux'
import {fetchMovies} from '../store'
import {Link} from 'react-router-dom'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault()
        //sent to redux
        this.props.getTheMovie(this.state)
        //reset state to nothing
        this.setState({value: ''})
    }

    render(){
        // console.log('props', this.props)
        console.log('body', this.props.movies)
        return(
            <div className='main-div'>
                 <h1>Search for a Movie!</h1>
                 <form onSubmit={this.handleSubmit}>
                     <label>
                         Movie:
                         <input type='text' name='movie' onChange={this.handleChange}/>
                     </label>
                     <input type='submit' value='Submit'/>
                 </form>
                    <ul>
                        {this.props.movies.body === undefined ? null : this.props.movies.body.titles.map((name) => {
                                return(<Link to={`/${name.title}`}><li key={name.title} movies={name}>{name.title}</li></Link>) 
                        })}
                    </ul>
            </div> 
        )
    }
}

//update redux state 
const mapState = (state) => {
    return {
        movies: state.movies
    }
}

//dispatching data to the thunk
const mapDispatch = (dispatch) => {
    return {
        getTheMovie: (state) => dispatch(fetchMovies(state))
    }
}

export default connect(mapState, mapDispatch)(App)