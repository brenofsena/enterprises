import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Spinner } from '@/presentation/components'

const Main = lazy(() => import('@/presentation/pages/main/main'))

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact component={Main} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router
