import axios from 'axios'
import React, { useEffect, useContext } from 'react'
import { Header } from '@/presentation/components'
import { ApiContext } from '@/presentation/contexts'

const Home: React.FC = () => {
  const { getCurrentAccount } = useContext(ApiContext)

  const fetchData = async (): Promise<any> => {
    const account = getCurrentAccount()
    const response = await axios.get('https://empresas.ioasys.com.br/api/v1/enterprises', {
      headers: {
        'access-token': account.accessToken,
        client: account.client,
        uid: account.uid
      }
    })

    console.log(response)
    return response
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Header />
  )
}

export default Home
