import * as S from './styles'
import React, { memo } from 'react'
import { useLogout } from '@/presentation/hooks'
import { Search } from '@/presentation/components'
import LogoWhite from '../../../../static/logo-white.png'

const Header: React.FC = () => {
  const logout = useLogout()

  const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    event.preventDefault()
    logout()
  }

  return (
    <S.Header>
      <S.Wrapper>
        <S.LogoWhite src={LogoWhite} alt="Ioasys" title="Ioasys" />
        <Search />
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
