import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import StepGetUser from '../containers/Step1'
import StepUser from '../containers/Step2'
import UserTemplate from '../components/templates/User'

const App = () => (
  <section>
    <HashRouter>
      <Switch>
        <Route path="/stepGetUser" exact component={StepGetUser} />
        <Route path="/stepUser" exact component={StepUser} />
        <Route path="/error" exact component={UserTemplate} />
      </Switch>
    </HashRouter>
  </section>
)

export default App