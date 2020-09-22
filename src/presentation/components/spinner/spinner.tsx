import React from 'react'
import * as S from './styles'

const Spinner: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Spinner data-testid="spinner">
        <div />
        <div />
        <div />
        <div />
      </S.Spinner>
    </S.Wrapper>
  )
}

export default Spinner
