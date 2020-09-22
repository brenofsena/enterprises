import React from 'react'
import * as S from './styles'
import Logo from '../../../../static/logo.png'

const Main: React.FC = () => (
  <S.Wrapper>
    <S.Image data-testid="logo" src={Logo} alt="Ioasys" title="Ioasys" />
  </S.Wrapper>
)

export default Main
