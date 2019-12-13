// https://docs.cypress.io/api/introduction/api.html

describe('Search Page', () => {
  it('Visits the search page', () => {
    cy.visit('/')
    cy.contains('[data-test="search-button"]', 'Search')
  })

  it('Visits the search page, clicks search with no city selected and shows error message', () => {
    cy.visit('/')
    cy.get('[data-test="search-button"]').click();
    cy.contains('[data-test="no-city"]', 'You must choose a city before searching.')

  })
})