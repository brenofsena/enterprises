import * as Helper from '../utils/helpers'

describe('Private Routes', () => {
  it('Should logout if enterprise-list has no token', () => {
    cy.visit('')
    Helper.testUrl('/login')
  })
})
