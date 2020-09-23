import React from 'react'
import { useParams } from 'react-router-dom'
import { EnterpriseDetails } from '@/presentation/pages'
import { makeRemoteLoadEnterpriseDetails } from '@/main/factories/usecases'

export const makeEnterpriseDetails: React.FC = () => {
  const { id }: any = useParams()
  return <EnterpriseDetails loadEnterpriseDetails={makeRemoteLoadEnterpriseDetails(id)} />
}
