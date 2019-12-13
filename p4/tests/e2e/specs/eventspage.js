// https://docs.cypress.io/api/introduction/api.html

describe('Events Page', () => {
    it('Visits the events page with no city selected.', () => {
        cy.visit('/events')
        cy.contains('[data-tests="no-city"]', 'No city searched. Go back to Search page and select a city.')
    })

    it('Visits the events page with a city in local storage.', () => {
        localStorage.setItem("searched", "true")
        localStorage.setItem("zip", "02139")
        localStorage.setItem("city", "Boston")
        localStorage.setItem("state", "Massachusetts")
        cy.visit('/events')
        cy.contains('[data-test="city-selected"]', 'Events:')
    })
})