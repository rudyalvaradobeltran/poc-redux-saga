import React, { useState } from 'react'
import Button from '../../atoms/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const UserTemplate = () => {
  const [loading, setLoading] = useState(false)
  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }
  return (
    <div>
      <Button 
        handleClick={handleClick}
        sendIcon={<ArrowForwardIcon />}
        loading={loading}
        loadingPosition="end"
        variant="contained"
        text="Get user"
        classes={null}
      /> 
    </div>
  )
}

export default UserTemplate
