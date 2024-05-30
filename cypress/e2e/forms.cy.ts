describe('forms test', () => {
  beforeEach(() => {
    cy.visit('/forms')
  })

  it('Test subscribe form', () => {
    cy.contains(/testing forms/i)
    cy.getDataTest('subscribe-form').find('input').as('subscribe-input') // alias

    cy.get('@subscribe-input').type('testmail@gmail.com')
    cy.contains(/Successfully subbed: testmail@gmail.com/).should('not.exist')
    cy.getDataTest('subscribe-button').click()
    cy.contains(/Successfully subbed: testmail@gmail.com/).should('exist')

    cy.wait(3000)
    cy.contains(/Successfully subbed: testmail@gmail.com/).should('not.exist')

    cy.get('@subscribe-input').type('testmail@gmail.io')
    cy.contains(/Invalid email: testmail@gmail.io/).should('not.exist')
    cy.getDataTest('subscribe-button').click()
    cy.contains(/Invalid email: testmail@gmail.io/).should('exist')

    cy.wait(3000)
    cy.contains(/Invalid email: testmail@gmail.io/).should('not.exist')
    cy.contains(/fail!/).should('not.exist')
    cy.getDataTest('subscribe-button').click()
    cy.contains(/fail!/).should('exist')
  })
})
