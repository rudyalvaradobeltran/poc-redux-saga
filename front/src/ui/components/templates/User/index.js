import React from 'react'
import Button from '../../atoms/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const UserTemplate = ({ handleGetUserClick, loading }) => {
  return (
    <Button 
      handleClick={handleGetUserClick}
      sendIcon={<ArrowForwardIcon />}
      loading={loading}
      loadingPosition="end"
      variant="contained"
      text="Get user"
      classes={null}
    />
  )
}

export default UserTemplate
