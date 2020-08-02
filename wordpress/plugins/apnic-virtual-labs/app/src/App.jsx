import React from 'react'
import { 
    useSelector,
} from 'react-redux'
import { getLabs } from './redux/app/actions'
import { 
  MuiThemeProvider, 
  createMuiTheme,
  makeStyles,
} from '@material-ui/core/'
import {
  themeLight,
} from './theme/'
import { 
	VirtualLabs, 
} from './components'

const useStyles = makeStyles(theme => ({
	app: {
		maxWidth: 580,
		margin: 'auto',
		background: 'white',
	},
}))

export default function App() {

	const appSlice = useSelector(state => state.app)
	const {
	    loading,
	    loaded,
	} = appSlice

	React.useEffect(() => {
		if (!loaded && !loading) getLabs()
    }, [loaded, loading])

	const classes = useStyles()
	return	<MuiThemeProvider theme={createMuiTheme(themeLight)}>
				
				<div className={classes.app} >
					<VirtualLabs />
				</div>
			</MuiThemeProvider>
}
