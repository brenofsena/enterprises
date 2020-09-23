import { createContext, useState } from 'react'
import { AccountModel } from '@/domain/models'
import { SearchEnterprises } from '@/domain/useCases'

type Props = {
  getCurrentAccount?: () => AccountModel
  setCurrentAccount?: (account: AccountModel) => void
}

export default createContext<Props>(null)
