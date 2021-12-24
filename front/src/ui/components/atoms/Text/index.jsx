import React from 'react'
import Typography from '@mui/material/Typography'

const Text = ({ variant, text }) => {
  return (
    <Typography variant={variant} display="block" gutterBottom>
      {text}
    </Typography>
  )
}

export default Text
