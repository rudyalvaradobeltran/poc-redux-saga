import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import useStyles from './styles'

const UserTemplate = ({ children }) => {
  const classes = useStyles()

  return (
    <Container className={classes.root} maxWidth="xl">
      <Box sx={{ bgcolor: '#fff', height: '100vh' }}>
        <Grid
          className={classes.grid}
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          {children}
        </Grid>
      </Box>
    </Container>
  )
}

export default UserTemplate
