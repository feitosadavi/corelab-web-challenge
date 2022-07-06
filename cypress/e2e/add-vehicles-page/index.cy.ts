/// <reference types="cypress" />

describe('AddVehicles page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/add-vehicle', {
      onBeforeLoad (win) {
        cy.stub(win.console, 'log').as('consoleLog')
        cy.stub(win.console, 'error').as('consoleError')
      }
    })
    // cy.waitForReact();
  })

  const REQUIRED_FIELD_MSG = 'Campo obrigatório'
  const NOT_ALLOWED_NON_ALPHA_MSG = 'Somente letras'
  const ONLY_FIVE_NUMERIC_DIGITS_MSG = 'Precisa ter exatamente 5 dígitos númericos'

  // MARCA INPUT
  it('should write typed values on marca input', () => {
    cy.get('input#marca').should('be.empty')
    cy.get('input#marca').type('Fiat')
    cy.get('input#marca').should('have.value', 'Fiat')
  })
  it('should return a error msg if user let marca field in blank', () => {
    cy.get('input#marca').should('be.empty')
    cy.get('input#marca').type('Fiat')
    cy.get('input#marca').clear()
    cy.get('sub#msg-for-marca').should('have.text', REQUIRED_FIELD_MSG)
  })

  // COR INPUT
  it('should write typed values on cor input', () => {
    cy.get('input#cor').should('be.empty')
    cy.get('input#cor').type('Vermelho')
    cy.get('input#cor').should('have.value', 'Vermelho')
  })
  it('should return a error msg if user types non alphabetic chars', () => {
    cy.get('input#cor').should('be.empty')
    cy.get('input#cor').type('Vermelho123')
    cy.get('sub#msg-for-cor').should('have.text', NOT_ALLOWED_NON_ALPHA_MSG)
  })
  it('should write typed values on cor input', () => {
    cy.get('input#cor').should('be.empty')
    cy.get('input#cor').type('Vermelho')
    cy.get('input#marca').clear()
    cy.get('sub#msg-for-marca').should('have.text', REQUIRED_FIELD_MSG)
  })

  // ANO INPUT
  it('should write typed values on ano input', () => {
    cy.get('input#ano').should('be.empty')
    cy.get('input#ano').type('2022')
    cy.get('input#ano').should('have.value', 2022)
  })
  it('should return a error msg if user types non numeric chars', () => {
    cy.get('input#ano').should('be.empty')
    cy.get('input#ano').type('queijo')
    cy.get('sub#msg-for-ano').should('have.text', ONLY_FIVE_NUMERIC_DIGITS_MSG)
  })
  it('should return a error msg if user types values with length smaller than 5 digits', () => {
    cy.get('input#ano').should('be.empty')
    cy.get('input#ano').type('123')
    cy.get('sub#msg-for-ano').should('have.text', ONLY_FIVE_NUMERIC_DIGITS_MSG)
  })
  it('should return a error msg if user types values with length bigger than 5 digits', () => {
    cy.get('input#ano').should('be.empty')
    cy.get('input#ano').type('12356')
    cy.get('sub#msg-for-ano').should('have.text', ONLY_FIVE_NUMERIC_DIGITS_MSG)
  })

  // SALVAR
  it('should write typed values on ano input', () => {
    cy.get('input#marca').type('Fiat')
    cy.get('input#cor').type('Vermelho')
    cy.get('input#ano').type('2022')
    cy.get('button[type=submit]').click()
    cy.get('@consoleLog').should('be.calledWith', {
      marca: 'Fiat',
      cor: 'Vermelho',
      ano: 2022
    })
    cy.get('@consoleLog').should('be.calledOnce')
  })
  it('error', () => {
    cy.get('button[type=submit]').click()
    cy.get('@consoleLog').should('not.be.calledOnce')
  })
})
