import React from 'react'
import {connect} from 'react-redux'
import {fetchMovies} from '../store'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // componentDidMount(){
    //     this.props.getMovies(this.state)
    // }

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
        console.log('props', this.props)
        console.log('body', this.props.movies)
        return(
            <div>
                 <div>Hello this is working!</div>
                 <form onSubmit={this.handleSubmit}>
                     <label>
                         Movie:
                         <input type='text' name='movie' onChange={this.handleChange}/>
                     </label>
                     <input type='submit' value='Submit'/>
                 </form>
                {/* <ul>
                    {this.props.movies.length ? this.props.movies.body.titles.map((name) => {
                            <li key={name.id}>{name.title}</li>
                    }) : <h1>Sorry beeeeeetch</h1>}
                </ul> */}

            
                    {/* {this.props.movies.length === 0 && this.state.firstTime === true ? null :  <h1>Sorry beeeeeetch</h1>} */}
                    {/* {this.props.movies.length > 0 ? this.props.movies.body.titles.map((name) => {
                            <li key={name.id}>{name.title}</li>
                    }) : null} */}
                    <ul>
                        {this.props.movies.body === undefined ? null : this.props.movies.body.titles.map((name) => {
                                return(<li key={name.id}>{name.title}</li>) 
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