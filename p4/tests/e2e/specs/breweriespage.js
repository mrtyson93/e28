// https://docs.cypress.io/api/introduction/api.html

describe('Breweries Page', () => {
    it('Visits the brewery page with no city selected.', () => {
        cy.visit('/breweries')
        cy.contains('[data-test="no-city"]', 'No city searched. Go back to Search page and select a city.')
    })

    it('Visits the brewery page with a city in local storage.', () => {
        localStorage.setItem("searched", "true")
        localStorage.setItem("zip", "99801")
        localStorage.setItem("city", "Juneau")
        localStorage.setItem("state", "Alaska")
        cy.visit('/breweries')
        cy.contains('[data-test="city-selected"]', 'Breweries:')
    })
})