import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { CLEAR_NEWS, FETCH_NEWS, SET_PAGE, SET_TERM } from "./types";

const key = process.env.REACT_APP_API;

export const fetchNews = (page, term, sortByValue) => async dispatch => {
    try {
        const { data } = await axios.get(`${BASE_URL}${term ? `everything?q=${term}&sortBy=${sortByValue}` : `top-headlines?country=us`}&page=${page}&apiKey=${key}`);

        dispatch(
            {
                type: FETCH_NEWS,
                payload: data
            }
        )
    } catch (error) {
        console.log(error.message);
    }
}


export const clearNews = () => {
    return (
        {
            type: CLEAR_NEWS,
            payload: []
        }
    )
}

export const setTerm = (term) => {
    return (
        {
            type: SET_TERM,
            payload: term
        }
    )
}

export const setPage = (page) => {
    return (
        {
            type: SET_PAGE,
            payload: page
        }
    )
}