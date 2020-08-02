import React, { useCallback } from 'react'
import update from 'immutability-helper'
import { 
    useSelector,
    useDispatch,
} from 'react-redux'
import {
  makeStyles,
  LinearProgress,
  Typography,
  Grid,
} from '@material-ui/core/'
import {
  Alert
} from '@material-ui/lab/'
import { 
  Lab,
  PageSize,
  Pagify,
} from './'

const useStyles = makeStyles(theme => ({
	virtualLabs: {
    marginTop: 35,
    background: 'white',
	},
  progress: {
    marginTop: 60,
  },
  pagination: {
    textAlign: 'center',
    marginBottom: theme.spacing(),
  },
  grow:{
    flexGrow: 1,
  },
  pagify:{
    textAlign: 'right',
  },
  slider: {
    marginTop: theme.spacing(),
  },
  error:{
    margin: theme.spacing(),
  }
}))

export default function VirtualLabs() {

	const classes = useStyles()
  const dispatch = useDispatch()
  const appSlice = useSelector(state => state.app)
  const {
    error,
    labList,
    loading,
    loaded,
    pageSize,
  } = appSlice

  const moveCard = useCallback((dragIndex, hoverIndex) => {
			const dragCard = labList[dragIndex]
      dispatch({type: `APP/LABLIST`, labList: update( labList, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ]
        })}) 

	}, [labList, dispatch])
    
  const renderLab = (lab, index) => {
    return	<Lab
		          key={lab.id}
              lab={lab}
		          index={index}
		          id={lab.id}
		          moveCard={moveCard}
  		    	/>
  }

  if (error) return <Alert 
                        className={classes.error}
                        severity={`warning`} 
                        variant={'filled'}>
                        <Typography variant={`h5`}>
                          { error }
                        </Typography>
                    </Alert>

  if (loading && !loaded) return  <div className={classes.progress}>
                                    <LinearProgress />
                                  </div>

  if (!labList.length) return null

  return	<div className={classes.virtualLabs}>
              
              <Grid container className={classes.pagination}>
                <Grid item xs={3} className={classes.slider}>
                  <PageSize />
                </Grid>
                <Grid item className={classes.grow} />
                <Grid item>
                  <div className={classes.pagify}>
                  <Pagify />
                  </div>
                </Grid>
                
              </Grid>
              
              { labList.map((lab, i) => {
                if (i > pageSize-1) return null
                return renderLab(lab, i)
              })}
              
      		</div>
}