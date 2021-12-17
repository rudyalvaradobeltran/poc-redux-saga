import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import useStyles from './styles'
import UserTemplate from '../../components/templates/User'

const StepGetUser = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
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
            <UserTemplate />
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default StepGetUser
