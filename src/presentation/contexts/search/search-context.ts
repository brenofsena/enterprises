import { SearchEnterprises } from '@/domain/useCases'
import { createContext } from 'react'

type Props = {
  searchEnterprises?: SearchEnterprises
  setEnterprises?: (state: any) => void
  handleError?: (error: Error) => void
}

export default createContext<Props>(null)
