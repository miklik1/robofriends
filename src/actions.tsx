import { Dispatch } from 'redux';
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED 
} from './constants'

export const setSearchField = (text: string) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
})

export const requestRobots = () => async (dispatch: Dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error });
  }
};
