/// <reference types="cypress" />

describe('Vehicles page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays two todo items by default', () => {
    cy.get('input').should('be.empty')
    cy.get('input').type('any_value')
    cy.get('input').should('have.value', 'any_value')
  })
})
