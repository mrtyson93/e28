// https://docs.cypress.io/api/introduction/api.html

describe('Weather Page', () => {
    it('Visits the weather page with no city selected.', () => {
        cy.visit('/weather')
        cy.contains('[data-tests="no-city"]', 'No city searched. Go back to Search page and select a city.')
    })

    it('Visits the weather page with a city in local storage.', () => {
        localStorage.setItem("searched", "true")
        localStorage.setItem("zip", "99801")
        localStorage.setItem("city", "Juneau")
        localStorage.setItem("state", "Alaska")
        cy.visit('/weather')
        cy.contains('[data-test="city-selected"]', 'Temperature:')
    })
})