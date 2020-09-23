import React, { Suspense, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Spinner, PrivateRoute } from '@/presentation/components'
import { ApiContext } from '@/presentation/contexts'
import { setCurrentAccountAdapter, getCurrentAccountAdapter } from '@/main/adapters'
import { makeRemoteSearchEnterprises } from '@/main/factories/usecases'
import { makeLogin, makeEnterpriseList, makeEnterpriseDetails } from '@/main/factories/pages'

const Router: React.FC = () => {
  return (
    <ApiContext.Provider
      value={{
        setCurrentAccount: setCurrentAccountAdapter,
        getCurrentAccount: getCurrentAccountAdapter,
        searchEnterprises: makeRemoteSearchEnterprises,
      }}
    >
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/login" exact component={makeLogin} />
            <PrivateRoute path="/" exact component={makeEnterpriseList} />
            <PrivateRoute path="/empresas/:id" component={makeEnterpriseDetails} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ApiContext.Provider>
  )
}

export default Router
