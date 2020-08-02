import React from 'react'
import { 
    useSelector,
    useDispatch,
} from 'react-redux'
import {
  Pagination,
} from '@material-ui/lab/'

export default function Pagify() {

  const dispatch = useDispatch()
  const appSlice = useSelector(state => state.app)
  const {
    pageSize,
    currentPage,
    labList,
  } = appSlice

  const onChange = (e, newPage) => {
    dispatch({type: `APP/CURRENTPAGE`, currentPage: newPage})
  }

  let totalPages = Math.floor(labList.length/pageSize)

//  console.log (totalPages)
  if (totalPages < 2) return null

  return	<Pagination 
            size={`small`}
            shape={`rounded`}
  	  			count={totalPages} 
  	  			page={currentPage} 
  	  			onChange={onChange} 
  	  		/>
}