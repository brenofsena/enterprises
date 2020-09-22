import * as S from './styles'
import React, { useEffect, useState } from 'react'
import { Header } from '@/presentation/components'
import { EnterpriseList } from '@/presentation/pages/home/components'
import { LoadEnterprises } from '@/domain/useCases'
import { useErrorHandler } from '@/presentation/hooks'

type Props = {
  loadEnterprises: any
}

const Home: React.FC<Props> = ({ loadEnterprises }: Props) => {
  const handleError = useErrorHandler((error: Error) => {
    setState(old => ({ ...old, error: error.message }))
  })

  const [state, setState] = useState({
    enterprises: [] as LoadEnterprises.Model[],
    error: '',
    reload: false
  })

  const reload = (): void => setState(old => ({ enterprises: [], error: '', reload: !old.reload }))

  useEffect(() => {
    loadEnterprises.loadAll()
      .then(({enterprises}) => setState(old => ({ ...old, enterprises })))
      .catch(handleError)
  }, [state.reload])

  return (
    <S.Wrapper>
      <Header />

      <S.ContentWrapper>
        {state.error
          ? <h3>Erro!</h3>
          : <EnterpriseList enterprises={state.enterprises} />
        }
      </S.ContentWrapper>

    </S.Wrapper>
  )
}

export default Home
