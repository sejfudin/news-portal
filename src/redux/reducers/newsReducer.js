import { CLEAR_NEWS, FETCH_NEWS, SET_PAGE, SET_TERM } from "../actions/types";

const initialState = {
    news: [],
    totalResults: null,
    term: "",
    page: 1,
    loading: false
};

export const newsReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_NEWS:
            return {
                ...state,
                news: state.page === 1 ? action.payload.articles : [...state.news, ...action.payload.articles],
                totalResults: action.payload.totalResults
            };
        case CLEAR_NEWS:
            return {
                news: action.payload,
                totalResults: null
            }
        case SET_TERM:
            return {
                ...state,
                term: action.payload
            }
        case SET_PAGE:
            return {
                ...state,
                page: action.payload
            }

        default:
            return state;
    }
}