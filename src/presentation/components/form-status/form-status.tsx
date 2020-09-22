import * as S from './styles'
import React, { useContext } from 'react'
import Spinner from '@/presentation/components/spinner/spinner'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { state } = useContext(Context)
  const { isLoading, mainError } = state

  return (
    <S.ErrorWrap data-testid="error-wrap" >
      {isLoading && <Spinner  />}
      {mainError && <S.Error data-testid="main-error" >{mainError}</S.Error>}
    </S.ErrorWrap>
  )
}

export default FormStatus
