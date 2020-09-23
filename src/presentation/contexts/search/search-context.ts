import { createContext } from 'react'

type Props = {
  setEnterprises?: (enterprises: any) => void
}

export default createContext<Props>(null)
