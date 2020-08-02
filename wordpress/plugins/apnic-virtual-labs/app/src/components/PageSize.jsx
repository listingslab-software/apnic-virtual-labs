import React from 'react'
import { 
    useSelector,
    useDispatch,
} from 'react-redux'
import {
  Slider,
  Grid,
  Typography,
} from '@material-ui/core/'

function getValuetext(value) {
  return `${value}`;
}

export default function PageSize() {
  const dispatch = useDispatch()
  const appSlice = useSelector(state => state.app)
  const {
    pageSize,
    labList,
  } = appSlice

  return  <Grid container>
                <Grid item>
                  <Typography style={{marginRight: 8, fontSize: 16}}>
                      {pageSize}
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Slider
                      marks
                      value={pageSize}
                      getAriaValueText={getValuetext}
                      valueLabelDisplay="auto"
                      step={1}
                      min={2}
                      max={labList.length}
                      onChange={(e, val) => {
                        dispatch({type: `APP/PAGESIZE`, pageSize: val})
                        dispatch({type: `APP/CURRENTPAGE`, currentPage: 1})
                      }}
                    />
                </Grid>
                
              </Grid>

}


/*    // or traditional drop down

      <FormControl 
        variant={`outlined`}
        className={classes.formControl} color={`secondary`}
      >
        <Select
          labelId={`page-size-label`}
          id={`page-size`}
          value={pageSize}
          onChange={onSelect}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>
*/
