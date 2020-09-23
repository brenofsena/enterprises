import React from 'react'
import { Router } from 'react-router-dom'
import { screen, waitFor, fireEvent } from '@testing-library/react'
import { EnterpriseDetails } from '@/presentation/pages'
import { ApiContext } from '@/presentation/contexts'
import {
  mockAccountModel,
  LoadEnterpriseDetailsSpy,
  mockEnterpriseDetailsModel,
} from '@/domain/test'
import { UnexpectedError, AccessDeniedError } from '@/domain/errors'
import { createMemoryHistory, MemoryHistory } from 'history'
import { AccountModel } from '@/domain/models'
import { renderWithTheme } from '@/presentation/utils/test/helpers'

type SutTypes = {
  loadEnterpriseDetailsSpy: LoadEnterpriseDetailsSpy
  history: MemoryHistory
  setCurrentAccountMock: (account: AccountModel) => void
}

const makeSut = (loadEnterpriseDetailsSpy = new LoadEnterpriseDetailsSpy()): SutTypes => {
  const history = createMemoryHistory({
    initialEntries: ['/', '/empresas/any_id'],
    initialIndex: 1,
  })
  const setCurrentAccountMock = jest.fn()
  renderWithTheme(
    <ApiContext.Provider
      value={{
        setCurrentAccount: setCurrentAccountMock,
        getCurrentAccount: () => mockAccountModel(),
      }}
    >
      <Router history={history}>
        <EnterpriseDetails loadEnterpriseDetails={loadEnterpriseDetailsSpy} />
      </Router>
    </ApiContext.Provider>,
  )

  return {
    loadEnterpriseDetailsSpy,
    history,
    setCurrentAccountMock,
  }
}

describe('EnterpriseDetails Component', () => {
  test('Should present correct initial sate', async () => {
    makeSut()
    const enterpriseDetails = screen.getByTestId('enterprise-details')
    expect(enterpriseDetails.childElementCount).toBe(0)
    expect(screen.queryByTestId('error')).not.toBeInTheDocument()
    await waitFor(() => enterpriseDetails)
  })

  test('Should call LoadenterpriseDetails', async () => {
    const { loadEnterpriseDetailsSpy } = makeSut()
    await waitFor(() => screen.getByTestId('enterprise-details'))
    expect(loadEnterpriseDetailsSpy.callsCount).toBe(1)
  })

  test('Should render error on UnexpectedError', async () => {
    const loadEnterpriseDetailsSpy = new LoadEnterpriseDetailsSpy()
    const error = new UnexpectedError()
    jest.spyOn(loadEnterpriseDetailsSpy, 'load').mockRejectedValueOnce(error)
    makeSut(loadEnterpriseDetailsSpy)
    await waitFor(() => screen.getByTestId('enterprise-details'))
    expect(screen.getByTestId('error')).toHaveTextContent(error.message)
  })

  test('Should logout on AccessDeniedError', async () => {
    const loadEnterpriseDetailsSpy = new LoadEnterpriseDetailsSpy()
    jest.spyOn(loadEnterpriseDetailsSpy, 'load').mockRejectedValueOnce(new AccessDeniedError())
    const { setCurrentAccountMock, history } = makeSut(loadEnterpriseDetailsSpy)
    await waitFor(() => screen.getByTestId('enterprise-details'))
    expect(setCurrentAccountMock).toHaveBeenCalledWith(undefined)
    expect(history.location.pathname).toBe('/login')
  })

  test('Should call LoadEnterpriseDetails on reload', async () => {
    const loadEnterpriseDetailsSpy = new LoadEnterpriseDetailsSpy()
    jest.spyOn(loadEnterpriseDetailsSpy, 'load').mockRejectedValueOnce(new UnexpectedError())
    makeSut(loadEnterpriseDetailsSpy)
    await waitFor(() => screen.getByTestId('enterprise-details'))
    fireEvent.click(screen.getByTestId('reload'))
    expect(loadEnterpriseDetailsSpy.callsCount).toBe(1)
    await waitFor(() => screen.getByTestId('enterprise-details'))
  })

  test('Should goto EnterpriseList on back button click', async () => {
    const { history } = makeSut()
    await waitFor(() => screen.getByTestId('enterprise-details'))
    fireEvent.click(screen.getByTestId('back-button'))
    expect(history.location.pathname).toBe('/')
  })
})
