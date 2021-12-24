import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import StepGetUser from '../containers/Step1'
import StepUser from '../containers/Step2'
import Error from '../containers/Error'
import useStyles from './styles'

const App = () => {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <HashRouter>
        <Switch>
          <Route path="/getUser" exact component={StepGetUser} />
          <Route path="/user" exact component={StepUser} />
          <Route component={Error} />
        </Switch>
      </HashRouter>
    </section>
  )
}

export default App