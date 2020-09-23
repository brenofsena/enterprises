import * as S from './styles'
import React, { useState, useEffect } from 'react'
import { Spinner, Error } from '@/presentation/components'
import { LoadEnterpriseDetails } from '@/domain/useCases'
import { useErrorHandler } from '@/presentation/hooks'
import {
  EnterpriseDetailsData,
  HeaderDetails,
} from '@/presentation/pages/enterprise-details/components'

type Props = {
  loadEnterpriseDetails: LoadEnterpriseDetails
}

const EnterpriseDetails: React.FC<Props> = ({ loadEnterpriseDetails }: Props) => {
  const handleError = useErrorHandler((error: Error) => {
    setState((old) => ({ ...old, enterprise: null, error: error.message }))
  })

  const [state, setState] = useState({
    isLoading: false,
    error: '',
    enterprise: null as LoadEnterpriseDetails.Model,
    reload: false,
  })

  const reload = (): void =>
    setState((old) => ({ isLoading: false, enterprise: null, error: '', reload: !old.reload }))

  useEffect(() => {
    loadEnterpriseDetails
      .load()
      .then((response) => {
        const { enterprise }: any = response
        setState((old) => ({ ...old, enterprise }))
      })
      .catch(handleError)
  }, [state.reload])

  return (
    <S.Wrapper>
      <HeaderDetails enterpriseName={state?.enterprise?.enterprise_name} />
      <S.ContentWrapper data-testid="enterprise-details">
        {state.enterprise && <EnterpriseDetailsData enterprise={state.enterprise} />}
        {state.isLoading && <Spinner />}
        {state.error && <Error error={state.error} reload={reload} />}
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default EnterpriseDetails
