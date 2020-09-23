import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Spinner, PrivateRoute } from '@/presentation/components'
import { ApiContext } from '@/presentation/contexts'
import { setCurrentAccountAdapter, getCurrentAccountAdapter } from '@/main/adapters'

const Login = lazy(() => import('@/main/factories/pages/login/login-factory'))
const EnterpriseList = lazy(
  () => import('@/main/factories/pages/enterprise-list/enterprise-list-factory'),
)
const EnterpriseDetails = lazy(
  () => import('@/main/factories/pages/enterprise-details/enterprise-details-factory'),
)

const Router: React.FC = () => {
  return (
    <ApiContext.Provider
      value={{
        setCurrentAccount: setCurrentAccountAdapter,
        getCurrentAccount: getCurrentAccountAdapter,
      }}
    >
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/login" exact component={Login} />
            <PrivateRoute path="/" exact component={EnterpriseList} />
            <PrivateRoute path="/empresas/:id" component={EnterpriseDetails} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ApiContext.Provider>
  )
}

export default Router
