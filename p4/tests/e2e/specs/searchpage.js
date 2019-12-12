// https://docs.cypress.io/api/introduction/api.html

describe('Search Page', () => {
  it('Visits the search page', () => {
    cy.visit('/')
    cy.contains('[data-test="search-button"]', 'Search')
  })
})