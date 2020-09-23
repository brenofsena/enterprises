import * as Helper from '../utils/helpers'
import * as Http from '../utils/http-mocks'

const path = /enterprises/
const mockUnexpectedError = (): void => Http.mockServerError(path, 'GET')
const mockSuccess = (): void => Http.mockOk(path, 'GET', 'fx:enterprise-details')
const mockAccessDeniedError = (): void => Http.mockForbiddenError(path, 'GET')

describe('EnterpriseDetails', () => {
  beforeEach(() => {
    cy.fixture('account').then((account) => {
      Helper.setLocalStorageItem('account', account)
    })
  })

  it('Should present error on UnexpectedError', () => {
    mockUnexpectedError()
    cy.visit('/empresas/any_id')
    cy.getByTestId('error').should(
      'contain.text',
      'Algo de errado aconteceu. Tente novamente em breve.',
    )
  })

  it('Should reload on button click', () => {
    mockUnexpectedError()
    cy.visit('/empresas/any_id')
    cy.getByTestId('error').should(
      'contain.text',
      'Algo de errado aconteceu. Tente novamente em breve.',
    )
    mockSuccess()
    cy.getByTestId('reload').click()
    cy.get('article:not(:empty)').should('have.length', 1)
  })

  it('Should present enterprise details', () => {
    mockSuccess()
    cy.visit('/empresas/any_id')
    cy.wait('@request')
    cy.get('article').then((article) => {
      assert.equal(
        article.find('[data-testid="image"]').attr('src'),
        'https://empresas.ioasys.com.br/any_photo',
      )
      assert.equal(article.find('[data-testid="description"]').text(), 'any_description')
    })
  })
})
