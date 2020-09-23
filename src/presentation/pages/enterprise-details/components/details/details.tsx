import * as S from './styles'
import React from 'react'
import { LoadEnterpriseDetails } from '@/domain/useCases'

type Props = {
  enterprise: LoadEnterpriseDetails.Model
}

const Details: React.FC<Props> = ({ enterprise }: Props) => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Image data-testid="image" src={`https://empresas.ioasys.com.br/${enterprise.photo}`} />
        <S.Description data-testid="description">{enterprise.description}</S.Description>
      </S.Content>
    </S.Wrapper>
  )
}

export default Details
