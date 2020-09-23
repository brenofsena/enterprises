import React from 'react'
import { EnterpriseList } from '@/presentation/pages'
import { makeRemoteLoadEnterprises, makeRemoteSearchEnterprises } from '@/main/factories/usecases'

export const makeEnterpriseList: React.FC = () => {
  return (
    <EnterpriseList
      loadEnterprises={makeRemoteLoadEnterprises()}
      searchEnterprises={makeRemoteSearchEnterprises()}
    />
  )
}
