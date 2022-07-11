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
  it('should write typed values on brand input', () => {
    cy.get('input#brand').should('be.empty')
    cy.get('input#brand').type('Fiat')
    cy.get('input#brand').should('have.value', 'Fiat')
  })
  it('should return a error msg if user let brand field in blank', () => {
    cy.get('input#brand').should('be.empty')
    cy.get('input#brand').type('Fiat')
    cy.get('input#brand').clear()
    cy.get('sub#msg-for-brand').should('have.text', REQUIRED_FIELD_MSG)
  })

  // COR INPUT
  it('should write typed values on color input', () => {
    cy.get('input#color').should('be.empty')
    cy.get('input#color').type('Vermelho')
    cy.get('input#color').should('have.value', 'Vermelho')
  })
  it('should return a error msg if user types non alphabetic chars', () => {
    cy.get('input#color').should('be.empty')
    cy.get('input#color').type('Vermelho123')
    cy.get('sub#msg-for-color').should('have.text', NOT_ALLOWED_NON_ALPHA_MSG)
  })
  it('should write typed values on color input', () => {
    cy.get('input#color').should('be.empty')
    cy.get('input#color').type('Vermelho')
    cy.get('input#brand').clear()
    cy.get('sub#msg-for-brand').should('have.text', REQUIRED_FIELD_MSG)
  })

  // ANO INPUT
  it('should write typed values on year input', () => {
    cy.get('input#year').should('be.empty')
    cy.get('input#year').type('2022')
    cy.get('input#year').should('have.value', 2022)
  })
  it('should return a error msg if user types non numeric chars', () => {
    cy.get('input#year').should('be.empty')
    cy.get('input#year').type('queijo')
    cy.get('sub#msg-for-year').should('have.text', ONLY_FIVE_NUMERIC_DIGITS_MSG)
  })
  it('should return a error msg if user types values with length smaller than 5 digits', () => {
    cy.get('input#year').should('be.empty')
    cy.get('input#year').type('123')
    cy.get('sub#msg-for-year').should('have.text', ONLY_FIVE_NUMERIC_DIGITS_MSG)
  })
  it('should return a error msg if user types values with length bigger than 5 digits', () => {
    cy.get('input#year').should('be.empty')
    cy.get('input#year').type('12356')
    cy.get('sub#msg-for-year').should('have.text', ONLY_FIVE_NUMERIC_DIGITS_MSG)
  })

  // SALVAR
  // it('should write typed values on year input', () => {
  //   cy.get('input#brand').type('Fiat')
  //   cy.get('input#color').type('Vermelho')
  //   cy.get('input#year').type('2022')
  //   cy.get('button[type=submit]').click()
  //   cy.get('@consoleLog').should('be.calledWith', {
  //     brand: 'Fiat',
  //     color: 'Vermelho',
  //     year: 2022
  //   })
  //   cy.get('@consoleLog').should('be.calledOnce')
  // })
  // it('error', () => {
  //   cy.get('button[type=submit]').click()
  //   cy.get('@consoleLog').should('not.be.calledOnce')
  // })
})
