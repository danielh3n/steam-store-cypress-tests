describe('Steam Store - Category Browsing', () => {
  it('should display games in Top Sellers', () => {
    cy.visit('/search/?filter=topsellers')
    cy.get('.search_result_row').should('have.length.greaterThan', 0)
  })
})
