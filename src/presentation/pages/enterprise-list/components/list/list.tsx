import * as S from './styles'
import React from 'react'
import { EnterpriseItem } from '@/presentation/pages/enterprise-list/components'
import { LoadEnterprises } from '@/domain/useCases'

type Props = {
  enterprises: LoadEnterprises.Model[]
}

const List: React.FC<Props> = ({ enterprises }: Props) => {
  return (
    <S.List data-testid="enterprise-list">
      {enterprises?.map((enterprise: LoadEnterprises.Model) => (
        <EnterpriseItem key={enterprise.id} enterprise={enterprise} />
      ))}
    </S.List>
  )
}

export default List
