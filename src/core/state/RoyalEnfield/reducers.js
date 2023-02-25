// eslint-disable-next-line import/no-named-default
import { default as Types } from './types'

const { SET_IS_LOADING, SET_ERROR } = Types

const initialState = {
  isLoading: false,
  error: ''
}

const royalEnfieldReducer = (state = { ...initialState }, { type, ...props }) => {
  switch (type) {
    case SET_IS_LOADING: {
      return {
        ...state, isLoading: props.isLoading
      }
    }
    case SET_ERROR: {
      return {
        ...state, error: props.error
      }
    }
    default:
      return state
  }
}

export default royalEnfieldReducer
