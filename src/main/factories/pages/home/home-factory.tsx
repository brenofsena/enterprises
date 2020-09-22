import React from 'react'
import { Home } from '@/presentation/pages'
import { makeRemoteLoadEnterprises } from '@/main/factories/usecases'

const makeHome: React.FC = () => {
  return (
    <Home loadEnterprises={makeRemoteLoadEnterprises()} />
  )
}

export default makeHome
