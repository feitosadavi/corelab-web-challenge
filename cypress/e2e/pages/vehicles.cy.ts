/// <reference types="cypress" />

describe('Vehicles page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should change search input value on search', () => {
    cy.get('input').should('be.empty')
    cy.get('input').type('any_value')
    cy.get('input').should('have.value', 'any_value')
  })
})
