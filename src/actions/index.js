import axios from 'axios'
import {
  ADD_PROJECTS,
  PROJECTS_LOADING,
  TOGGLE_DARK,
  PROJECTS_ERROR,
  ADD_SINGLE_PROJECTS,
  SINGLE_PROJECTS_LOADING,
  SINGLE_PROJECTS_ERROR,
} from './types'

const uri = process.env.REACT_APP_URI

export const toggleDark = () => {
  return {
    type: TOGGLE_DARK,
  }
}

export const fetchProjects = () => (dispatch) => {
  dispatch({ type: PROJECTS_LOADING })
  axios
    .get(`${uri}/projects`)
    .then((res) => {
      dispatch({
        type: ADD_PROJECTS,
        payload: res.data,
      })
    })
    .catch((err) => {
      dispatch({
        type: PROJECTS_ERROR,
        payload: err.message,
      })
    })
}

export const fetchSingleProjects = () => {
  return async (dispatch) => {
    dispatch({ type: SINGLE_PROJECTS_LOADING })
    try {
      const res = await axios.get(`${uri}/singleprojects`)
      dispatch({
        type: ADD_SINGLE_PROJECTS,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: SINGLE_PROJECTS_ERROR,
        payload: err.message,
      })
    }
  }
}
