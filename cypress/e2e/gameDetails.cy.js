describe('Steam Store - Game Details', () => {
  it('should display game details for CS2', () => {
    cy.visit('/search/?term=cs2')
    cy.get('.search_result_row').first().click()
    cy.get('.apphub_AppName').should('contain.text', 'Counter-Strike 2')
    cy.get('.game_area_purchase_game').should('exist')
  })
})
