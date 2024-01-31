Cypress.Commands.add('clickLink',(label) => {
    cy.get('a').contains(label).click()
})