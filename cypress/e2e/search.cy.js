describe('Steam Store - Game Search', () => {
  it('should return relevant results for CS2', () => {
    cy.visit('/')
    cy.get('#store_nav_search_term', { timeout: 10000 }).should('be.visible').type('cs2{enter}')
    cy.get('.search_result_row').should('contain.text', 'Counter-Strike 2')
  })
})
