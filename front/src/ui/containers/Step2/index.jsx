import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import UserTemplate from '../../components/templates/User'
import UserData from '../../components/molecules/UserData'
import { useSelector } from 'react-redux'

const StepUser = () => {
  const history = useHistory()
  const storeDataUser = useSelector((store) => store.entities.user)

  useEffect(() => {
    if (Object.keys(storeDataUser.response).length === 0) {
      history.push('/getUser')
    }
    if (storeDataUser.responseError) {
      history.push('/error')
    }
  }, [storeDataUser, history])

  return (
    <React.Fragment>
      {storeDataUser.response &&
        <>
          <CssBaseline />
          <UserTemplate>
            <UserData user={storeDataUser.response} />
          </UserTemplate>
        </>
      }
    </React.Fragment>
  )
}

export default StepUser
