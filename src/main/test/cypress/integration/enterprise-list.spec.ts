import * as Helper from '../utils/helpers'
import * as Http from '../utils/http-mocks'

const path = /enterprises/
const mockUnexpectedError = (): void => Http.mockServerError(path, 'GET')
const mockAccessDeniedError = (): void => Http.mockForbiddenError(path, 'GET')
const mockSuccess = (): void => Http.mockOk(path, 'GET', 'fx:enterprise-list')

describe('EnterpriseList', () => {
  beforeEach(() => {
    cy.fixture('account').then((account) => {
      Helper.setLocalStorageItem('account', account)
    })
  })

  it('Should present error on UnexpectedError', () => {
    mockUnexpectedError()
    cy.visit('')
    cy.getByTestId('error').should(
      'contain.text',
      'Algo de errado aconteceu. Tente novamente em breve.',
    )
  })

  it('Should reload on button click', () => {
    mockUnexpectedError()
    cy.visit('')
    cy.getByTestId('error').should(
      'contain.text',
      'Algo de errado aconteceu. Tente novamente em breve.',
    )
    mockSuccess()
    cy.getByTestId('reload').click()
    cy.get('li:not(:empty)').should('have.length', 1)
  })

  it('Should logout on logout link click', () => {
    mockUnexpectedError()
    cy.visit('')
    cy.getByTestId('logout').click()
    Helper.testUrl('/login')
  })

  it('Should present Enterprise Items', () => {
    mockSuccess()
    cy.visit('')
    cy.wait('@request')
    cy.get('li:nth-child(1)').then((li) => {
      assert.equal(
        li.find('[data-testid="image"]').attr('src'),
        'https://empresas.ioasys.com.br/any_photo',
      )
      assert.equal(li.find('[data-testid="name"]').text(), 'any_enterprise_name')
      assert.equal(li.find('[data-testid="type-name"]').text(), 'any_enterprise_type_name')
      assert.equal(li.find('[data-testid="country"]').text(), 'any_city')
    })
  })
})
