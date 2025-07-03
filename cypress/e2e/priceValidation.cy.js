describe('Steam Store - Price Validation', () => {
  it('should validate that at least one Free to Play game is labeled correctly', () => {
    cy.visit('/search/?tags=113')

    cy.get('.search_result_row').should('have.length.greaterThan', 0)

    let foundFree = false

    cy.get('.search_result_row')
      .each(($el) => {
        const priceEl = $el.find('.search_price')
        const priceText = priceEl.text().trim()

        const hasFreeText = priceText.includes('Free')
        const hasNoPrice = priceText === ''
        const hasDiscountPrice = $el.find('.discount_final_price').text().includes('Free')
        const hasPlayButton = $el.find('.btn_addtocart').text().includes('Play')

        if (hasFreeText || hasNoPrice || hasDiscountPrice || hasPlayButton) {
          foundFree = true
        }
      })
      .then(() => {
        expect(foundFree, 'at least one game should be marked as Free').to.be.true
      })
  })
})
