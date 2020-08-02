import { createAction } from '@reduxjs/toolkit'
import { getStore } from '../../'
import axios from 'axios'

export const error = createAction(`APP/ERROR`)
export const labList = createAction(`APP/LABLIST`)
export const loading = createAction(`APP/LOADING`)
export const loaded = createAction(`APP/LOADED`)
export const pageSize = createAction(`APP/PAGESIZE`)
export const currentPage = createAction(`APP/CURRENTPAGE`)

export const getLabs = () => {

	const store = getStore()
	store.dispatch({type: `APP/LOADING`, loading: true })
	axios.get(`https://academy.apnic.net/wp-json/academy/virtual-labs`)
		.then(function(response) {
				store.dispatch({ type: `APP/LABLIST`, labList: response.data.virtualLabs })
			})
			.catch(function(error) {
				console.log ('error', error.toString())
				store.dispatch({ type: `APP/ERROR`, error: error.toString() })
			})
			.finally(function() {
				store.dispatch({type: `APP/LOADING`, loading: false })
				store.dispatch({type: `APP/LOADED`, loaded: true })
			})
}
