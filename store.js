//Redux
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import axios from "axios";
import {createLogger} from "redux-logger";

const GET_MOVIES = 'GET_MOVIES'

//action creator
export const getMovies = movies => {
    return {
        type: GET_MOVIES,
        movies
    }
}

//thunk
export const fetchMovies = (state) => async (dispatch) => {
    console.log('you have reached the thunk!', state)
    const { data } = await axios.get(`/api/movies/${state.movie}`) //this is the third party
    console.log('data', data)
    dispatch(getMovies(data))
}

const initialState = {
    movies: []
}
//reducer
const movieReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_MOVIES:
            return {...state, movies: action.movies}
        default:
            return state
    }
}

const store = createStore(movieReducer, applyMiddleware(thunkMiddleware, createLogger({
    collapsed: true
})));

export default store;