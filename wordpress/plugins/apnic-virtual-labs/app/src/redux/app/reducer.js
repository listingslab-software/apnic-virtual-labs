import pJSON from '../../../package.json'
import { createReducer } from "@reduxjs/toolkit"
import {
  error,
  labList,
  loading,
  loaded,
  pageSize,
  currentPage,
} from "./actions"

export const appSlice = {
  pJSON,
  error: false,
  labList: [],
  loading: false,
  loaded: false,
  pageSize: 3,
  currentPage: 1,
}

const appReducer = createReducer(appSlice, {

  [currentPage]: (state, action) => {
    state.currentPage = action.currentPage
    return state
  },
  
  [pageSize]: (state, action) => {
    state.pageSize = action.pageSize
    return state
  },

  [labList]: (state, action) => {
    state.labList = action.labList
    return state
  },

  [loading]: (state, action) => {
    state.loading = action.loading
    return state
  },
  
  [loaded]: (state, action) => {
    state.loaded = action.loaded
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { appReducer }