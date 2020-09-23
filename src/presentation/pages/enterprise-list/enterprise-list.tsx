import * as S from './styles'
import React, { useEffect, useState } from 'react'
import { Header, Error } from '@/presentation/components'
import { EnterpriseListItem } from '@/presentation/pages/enterprise-list/components'
import { LoadEnterprises } from '@/domain/useCases'
import { useErrorHandler } from '@/presentation/hooks'

type Props = {
  loadEnterprises: any
}

const EnterpriseList: React.FC<Props> = ({ loadEnterprises }: Props) => {
  const [state, setState] = useState({
    enterprises: [] as LoadEnterprises.Model[],
    error: '',
    reload: false,
  })

  const handleError = useErrorHandler((error: Error) => {
    setState((old) => ({ ...old, error: error.message }))
  })

  const reload = (): void =>
    setState((old) => ({ enterprises: [], error: '', reload: !old.reload }))

  useEffect(() => {
    loadEnterprises
      .loadAll()
      .then(({ enterprises }) => setState((old) => ({ ...old, enterprises })))
      .catch(handleError)
  }, [state.reload])

  return (
    <S.Wrapper>
      <Header />

      <S.ContentWrapper>
        {state.error ? (
          <Error error={state.error} reload={reload} />
        ) : (
          <EnterpriseListItem enterprises={state.enterprises} />
        )}
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default EnterpriseList
