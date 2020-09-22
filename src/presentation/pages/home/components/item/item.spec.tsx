import React from 'react'
import {  screen, fireEvent } from '@testing-library/react'
import { EnterpriseItem } from '@/presentation/pages/home/components'
import { mockRemoteEnterpriseModel } from '@/data/test'
import { Router } from 'react-router-dom'
import { createMemoryHistory, MemoryHistory } from 'history'
import { renderWithTheme } from '@/presentation/utils/test/helpers'

type SutTypes = {
  history: MemoryHistory
}

const makeSut = (enterprise = mockRemoteEnterpriseModel()): SutTypes => {
  const history = createMemoryHistory({ initialEntries: ['/'] })

  renderWithTheme(
    <Router history={history}>
      <EnterpriseItem enterprise={enterprise} />
    </Router>
  )

  return {
    history
  }
}

describe('EnterpriseItem Component', () => {
  test('Should render with correct values', () => {
    const enterprise = mockRemoteEnterpriseModel()
    makeSut(enterprise)
    expect(screen.getByTestId('image')).toHaveAttribute('src', `https://empresas.ioasys.com.br/${enterprise.photo}`)
    expect(screen.getByTestId('name')).toHaveTextContent(enterprise.enterprise_name)
    expect(screen.getByTestId('type-name')).toHaveTextContent(enterprise.enterprise_type.enterprise_type_name)
    expect(screen.getByTestId('country')).toHaveTextContent(enterprise.city)
  })

  test('Should go to enterpriseResult', () => {
    const enterprise = mockRemoteEnterpriseModel()
    const { history } = makeSut(enterprise)
    fireEvent.click(screen.getByTestId('link'))
    expect(history.location.pathname).toBe(`/empresas/${enterprise.id}`)
  })
})
