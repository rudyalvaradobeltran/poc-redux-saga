import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import useStyles from './styles'
import UserTemplate from '../../components/templates/User'
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../../application/actions/user';

const StepGetUser = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const history = useHistory()

  const storeDataUser = useSelector((store) => store.entities.user)
  const storeDataLoading = useSelector((store) => store.ui.loading)

  const handleGetUserClick = () => {
    const active = true
    const birthDate = '01/01/1992'
    const params = { active, birthDate }
    dispatch(userActions.user(params))
  }

  useEffect(() => {
    if (Object.keys(storeDataUser.response).length > 0) {
      history.push('/stepUser')
    }
    if (storeDataUser.responseError) {
      history.push('/stepUser')
    }
  }, [storeDataUser, history])

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
            <UserTemplate handleGetUserClick={handleGetUserClick} loading={storeDataLoading.loading} />
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default StepGetUser
