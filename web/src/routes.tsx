import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from '../src/pages/Home'
import CreateUser from '../src/pages/CreateUser'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path='/' exact />
      <Route component={CreateUser} path='/sign' />
    </BrowserRouter>
  )
}

export default Routes
