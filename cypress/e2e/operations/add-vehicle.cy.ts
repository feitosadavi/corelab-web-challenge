/// <reference types="cypress" />
describe('AddVehicles page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should add a new vehicle', () => {
    cy.get('button#add-vehicle-btn').should('be.visible').click()

    cy.url().should('contain', 'add-vehicle')

    cy.get('input#name').should('be.empty').type('Sandero')
    cy.get('input#brand').should('be.empty').type('Fiat')
    cy.get('input#color').should('be.empty').type('Vermelho')
    cy.get('input#year').should('be.empty').type('2022')
    cy.get('input#plate').should('be.empty').type('DDD-1234')
    cy.get('textarea#description').should('be.empty').type('Carro novo')
    cy.get('input#price').should('be.empty').type('1000')
    cy.get('button[type=submit]').click()
    cy.url().should('contain', 'home')
  })
})
