import React, { Component } from 'react'
import IconDefault from '@material-ui/icons/Help'
import IconPushtotalk from '@material-ui/icons/TouchApp'
import IconClose from '@material-ui/icons/Close'
import IconEdit from '@material-ui/icons/Edit'
import IconSave from '@material-ui/icons/Save'
import IconSignout from '@material-ui/icons/ExitToApp'
import IconLeft from '@material-ui/icons/ArrowBack'
import IconLink from '@material-ui/icons/Link'

class Icon extends Component {
    render() {
        const {
            icon,
            color,
        } = this.props
        let iconColor = `primary`
        if (color) iconColor = color
        switch (icon) {
            case `none`:
                return null
            case `link`:
                return (<IconLink color={iconColor} />) 
            case `pushtotalk`:
                return (<IconPushtotalk color={iconColor} />) 
            case `close`:
                return (<IconClose color={iconColor} />) 
            case `signout`:
                return (<IconSignout color={iconColor} />) 
            case `left`:
                return (<IconLeft color={iconColor} />) 
            case `edit`:
                return (<IconEdit color={iconColor} />) 
            case `save`:
                return (<IconSave color={iconColor} />) 
            default: {
                return (<IconDefault color={iconColor} />)
            }
        }
    }
}

export default Icon
