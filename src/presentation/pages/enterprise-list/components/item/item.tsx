import * as S from './styles'
import React from 'react'
import { Link } from 'react-router-dom'
import { LoadEnterprises } from '@/domain/useCases'

type Props = {
  enterprise: LoadEnterprises.Model
}

const EnterpriseItem: React.FC<Props> = ({ enterprise }: Props) => {
  return (
    <S.Item>
      <S.Anchor data-testid="link" to={`/empresas/${enterprise.id}`}>
        <S.Image
          data-testid="image"
          src={`${process.env.IMAGES_URL}/${enterprise.photo}`}
          alt={enterprise.enterprise_name}
          title={enterprise.enterprise_name}
        />
        <S.Description>
          <S.Name data-testid="name">{enterprise.enterprise_name}</S.Name>
          <S.TypeName data-testid="type-name">
            {enterprise.enterprise_type.enterprise_type_name}
          </S.TypeName>
          <S.Country data-testid="country">{enterprise.city}</S.Country>
        </S.Description>
      </S.Anchor>
    </S.Item>
  )
}

export default EnterpriseItem
