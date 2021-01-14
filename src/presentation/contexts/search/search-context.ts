import { LoadEnterprises } from '@/domain/useCases'
import { createContext } from 'react'

type Props = {
  searchEnterprises?: LoadEnterprises
  setEnterprises?: (state: any) => void
  handleError?: (error: Error) => void
}

export default createContext<Props>(null)
