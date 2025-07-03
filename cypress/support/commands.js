Cypress.Commands.add('searchGame', (title) => {
  cy.get('#store_nav_search_term').type(title)
  cy.get('#store_search_form').submit()
})
