import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import UserTemplate from '../../components/templates/User'
import Button from '../../components/atoms/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../../../application/actions/user'

const StepGetUser = () => {
  const dispatch = useDispatch()
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
      history.push('/user')
    }
    if (storeDataUser.responseError) {
      history.push('/error')
    }
  }, [storeDataUser, history])

  return (
    <React.Fragment>
      <CssBaseline />
      <UserTemplate>
        <Button 
          handleClick={handleGetUserClick}
          sendIcon={<ArrowForwardIcon />}
          loading={storeDataLoading.loading}
          loadingPosition="end"
          variant="contained"
          text="Get user"
          classes={null}
        />
      </UserTemplate>
    </React.Fragment>
  )
}

export default StepGetUser
