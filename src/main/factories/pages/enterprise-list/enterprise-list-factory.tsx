import React from 'react'
import { EnterpriseList } from '@/presentation/pages'
import { makeRemoteLoadEnterprises } from '@/main/factories/usecases'

const makeEnterpriseList: React.FC = () => {
  return <EnterpriseList loadEnterprises={makeRemoteLoadEnterprises()} />
}

export default makeEnterpriseList
