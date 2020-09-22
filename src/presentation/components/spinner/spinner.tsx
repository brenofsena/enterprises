import React from 'react'
import * as S from './styles'

const Spinner: React.FC = () => {
  return (
    <S.Spinner data-testid="spinner">
      <div />
      <div />
      <div />
      <div />
    </S.Spinner>
  )
}

export default Spinner
