import * as S from './styles'
import React, { useEffect, useState } from 'react'
import { Header, Error } from '@/presentation/components'
import { EnterpriseListItem } from '@/presentation/pages/enterprise-list/components'
import { LoadEnterprises } from '@/domain/useCases'
import { useErrorHandler } from '@/presentation/hooks'
import { SearchContext } from '@/presentation/contexts'

type Props = {
  loadEnterprises: LoadEnterprises
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
      .then((response) => {
        const { enterprises }: any = response
        setState((old) => ({ ...old, enterprises }))
      })
      .catch(handleError)
  }, [state.reload])

  return (
    <S.Wrapper>
      <SearchContext.Provider
        value={{ setEnterprises: setState, searchEnterprises: loadEnterprises, handleError }}
      >
        <Header />

        <S.ContentWrapper>
          {state.error ? (
            <Error error={state.error} reload={reload} />
          ) : (
            <EnterpriseListItem enterprises={state.enterprises} />
          )}
        </S.ContentWrapper>
      </SearchContext.Provider>
    </S.Wrapper>
  )
}

export default EnterpriseList
