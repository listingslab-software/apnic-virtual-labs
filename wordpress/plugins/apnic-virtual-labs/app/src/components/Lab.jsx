import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import {
  makeStyles,
  // ButtonBase,
  Typography,
  Grid,
} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
  lab: {
      cursor: 'move',
      borderLeft: '2px solid ' + theme.palette.primary.main,
      paddingLeft: theme.spacing(2),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      background: 'white',
  },
  mightyBB:{
    textTransform: 'none',
    display: 'block',
  },
  thumbnail: {
    width: '100%',
    maxWidth: 200,
    marginTop: theme.spacing(2),
  },
  labDescription:{
    marginRight: theme.spacing(2),
    textAlign: 'left',
    fontSize: 14,
  },
  labTitle:{
    textAlign: 'left',
    fontSize: 18,
  },
  labDuration:{
    textAlign: 'left',
    fontSize: 12,
  },

}))

export const ItemTypes = {
  LAB: 'lab',
}

export const Lab = ({ id, lab, index, moveCard }) => {
  
  const ref = useRef(null)
  const classes = useStyles()
  const [, drop] = useDrop({
    accept: ItemTypes.LAB,
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      moveCard(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.LAB, id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0 : 1
  drag(drop(ref))

  // console.log ('lab', lab)

  return (
    <div 
      className={classes.lab} 
      ref={ref} 
      style={{ opacity }}>
      <div
        className={classes.mightyBB} 
        onClick={(e) => {
          e.preventDefault()
          window.open(lab.viewDetailsURL,`_blank`)
        }}>
    
        <Grid container>
          
          <Grid item xs={9}>
            <Typography className={classes.labTitle}>
              {lab.name}
            </Typography>
            
            <Typography  className={classes.labDescription}>
              {lab.description}
            </Typography>

            <Typography  className={classes.labDuration}>
              {lab.formattedDuration}, {lab.language}
            </Typography>
            
          </Grid>

          <Grid item xs={3}>
            <img
              className={classes.thumbnail}
              src={lab.thumbnail}
              alt={lab.name}
            />
            
          </Grid>


        </Grid>

      </div>
    </div>
  )
}
