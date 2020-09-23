import * as S from './styles'
import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'
import { useLogout } from '@/presentation/hooks'
import IconArrowLeft from '@static/icon-arrow-left.svg'

type Props = {
  enterpriseName: string
}

const Header: React.FC<Props> = ({ enterpriseName }: Props) => {
  const { goBack } = useHistory()
  const logout = useLogout()

  const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    event.preventDefault()
    logout()
  }

  return (
    <S.Header>
      <S.Wrapper>
        <S.Info>
          <S.Back onClick={goBack} data-testid="back-button">
            <img src={IconArrowLeft} />
          </S.Back>
          <S.Name data-testid="enterprise-name">{enterpriseName}</S.Name>
        </S.Info>

        <S.Logout>
          <a data-testid="logout" href="#" onClick={handleLogout}>
            Sair
          </a>
        </S.Logout>
      </S.Wrapper>
    </S.Header>
  )
}

export default memo(Header)
