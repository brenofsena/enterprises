import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Spinner, PrivateRoute } from '@/presentation/components'
import { ApiContext } from '@/presentation/contexts'
import { setCurrentAccountAdapter, getCurrentAccountAdapter } from '@/main/adapters'

const Login = lazy(() => import ('@/main/factories/pages/login/login-factory'))
const Home = lazy(() => import ('@/main/factories/pages/home/home-factory'))

const Router: React.FC = () => {
  return (
    <ApiContext.Provider value={{
      setCurrentAccount: setCurrentAccountAdapter,
      getCurrentAccount: getCurrentAccountAdapter
    }}
    >
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/login" exact component={Login} />
            <PrivateRoute path="/" exact component={Home} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ApiContext.Provider>
  )
}

export default Router
