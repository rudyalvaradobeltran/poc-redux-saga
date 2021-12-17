import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import useStyles from './styles'

const Button = ({ handleClick, sendIcon, loading, loadingPosition, variant, text, classes=null }) => {
  const defaulClasses = useStyles()
  
  return (
    <LoadingButton
      classes={classes || defaulClasses}
      onClick={handleClick}
      endIcon={sendIcon}
      loading={loading}
      loadingPosition={loadingPosition}
      variant={variant}
    >
      {text}
    </LoadingButton>
  )
}

export default Button
