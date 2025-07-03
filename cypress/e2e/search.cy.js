describe('Steam Store - Game Search', () => {
  it('should return relevant results for CS2', () => {
    cy.visit('/')
    cy.searchGame('cs2')
    cy.get('.search_result_row').should('contain.text', 'Counter-Strike 2')
  })
})
