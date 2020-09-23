import * as S from './styles'
import React from 'react'
import { EnterpriseItem } from '@/presentation/pages/enterprise-list/components'
import { LoadEnterprises } from '@/domain/useCases'
import { Spinner } from '@/presentation/components'

type Props = {
  enterprises: LoadEnterprises.Model[]
}

const List: React.FC<Props> = ({ enterprises }: Props) => {
  return (
    <S.List data-testid="enterprise-list">
      {enterprises.length ? (
        enterprises.map((enterprise: LoadEnterprises.Model) => (
          <EnterpriseItem key={enterprise.id} enterprise={enterprise} />
        ))
      ) : (
        <Spinner />
      )}
    </S.List>
  )
}

export default List
