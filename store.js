//Redux
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import axios from "axios";
import {createLogger} from "redux-logger";

const GET_MOVIES = 'GET_MOVIES'
const GET_RATINGS = 'GET_RATINGS'

//action creator
export const getMovies = movies => {
    return {
        type: GET_MOVIES,
        movies
    }
}

export const getRatings = ratings => {
    return {
        type: GET_RATINGS,
        ratings
    }
}


//thunk
export const fetchMovies = (state) => async (dispatch) => {
    // console.log('you have reached the thunk!', state)
    const { data } = await axios.get(`/api/movies/${state.movie}`) //this is the third party
    // console.log('data', data)
    dispatch(getMovies(data))
}

export const fetchRatings = () => async (dispatch) => {
    console.log('you have reached the thunk!')
    const { data } = await axios.get('/api/ratings') 
    console.log('data', data)
    dispatch(getRatings(data))
}




const initialState = {
    movies: [],
    ratings: []
}
//reducer
const movieReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_MOVIES:
            return {...state, movies: action.movies}
        case GET_RATINGS:
            return{...state, ratings: action.ratings}
        default:
            return state
    }
}

const store = createStore(movieReducer, applyMiddleware(thunkMiddleware, createLogger({
    collapsed: true
})));

export default store;