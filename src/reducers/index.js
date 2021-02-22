import { combineReducers } from 'redux'
import {
  TOGGLE_DARK,
  ADD_PROJECTS,
  ADD_SINGLE_PROJECTS,
  SINGLE_PROJECTS_LOADING,
  PROJECTS_LOADING,
  PROJECTS_ERROR,
  SINGLE_PROJECTS_ERROR,
} from '../actions/types'

const initialMode = true
const initialProjects = { loading: false, projects: [], error: '' }
const initialSingleProjects = { loading: false, projects: [], error: '' }

const darkModeReducer = (state = initialMode, action) => {
  switch (action.type) {
    case TOGGLE_DARK:
      return !state
    default:
      return state
  }
}

const projectReducer = (state = initialProjects, action) => {
  switch (action.type) {
    case PROJECTS_LOADING:
      return { ...state, loading: true }
    case PROJECTS_ERROR:
      return { ...state, error: action.payload }
    case ADD_PROJECTS:
      return { loading: false, projects: action.payload, error: '' }
    default:
      return state
  }
}

const singleProjectReducer = (state = initialSingleProjects, action) => {
  switch (action.type) {
    case SINGLE_PROJECTS_LOADING:
      return { ...state, loading: true }
    case SINGLE_PROJECTS_ERROR:
      return { ...state, error: action.payload }
    case ADD_SINGLE_PROJECTS:
      return { loading: false, projects: action.payload, error: '' }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  dark: darkModeReducer,
  projects: projectReducer,
  singleProjects: singleProjectReducer,
})

export default rootReducer
