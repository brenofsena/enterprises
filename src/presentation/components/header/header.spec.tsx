import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory, MemoryHistory } from 'history'
import { render, fireEvent,screen } from '@testing-library/react'
import { Header } from '@/presentation/components'
import { ApiContext } from '@/presentation/contexts'
import { AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/domain/test'
import { renderWithTheme } from '@/presentation/utils/test/helpers'

type SutTypes = {
  history: MemoryHistory
  setCurrentAccountMock: (account: AccountModel) => void
}

const makeSut = (account = mockAccountModel()): SutTypes => {
  const history = createMemoryHistory({ initialEntries: ['/'] })
  const setCurrentAccountMock = jest.fn()

  renderWithTheme(
    <ApiContext.Provider value={{ setCurrentAccount: setCurrentAccountMock, getCurrentAccount: () => account }}>
      <Router history={history}>
        <Header />
      </Router>
    </ApiContext.Provider>
  )

  return {
    history,
    setCurrentAccountMock
  }
}

describe('Header Component', () => {
  test('Should call setCurrentAccount with null', () => {
    const { history, setCurrentAccountMock } = makeSut()
    fireEvent.click(screen.getByTestId('logout'))
    expect(setCurrentAccountMock).toHaveBeenCalledWith(undefined)
    expect(history.location.pathname).toBe('/login')
  })
})
