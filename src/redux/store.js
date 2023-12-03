// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Initial state
const initialState = {
  searchHistory: [],
  wordDetails: null,
};

// Actions
const SET_WORD_DETAILS = 'SET_WORD_DETAILS';
const ADD_TO_HISTORY = 'ADD_TO_HISTORY';

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WORD_DETAILS:
      return { ...state, wordDetails: action.payload };
    case ADD_TO_HISTORY:
      return { ...state, searchHistory: [action.payload, ...state.searchHistory] };
    default:
      return state;
  }
};

// Action creators
export const setWordDetails = (details) => ({ type: SET_WORD_DETAILS, payload: details });
export const addToHistory = (word) => ({ type: ADD_TO_HISTORY, payload: word });

// Store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
