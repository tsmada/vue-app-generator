
describe('GeneratorView', () => {
  it('Load the app', () => {
    cy.visit('/')
    cy.contains('h4', 'Generate App Idea')
  })
  it('Perform some related to searches to determine app ideas', () => {
    // https://on.cypress.io/type
    cy.get('#searchInput')
      .type('fishing', { delay: 100 }).should('have.value', 'fishing')
      .get('#resetButton').click().get('#searchInput')
      .type('taxes', { delay: 100 }).should('have.value', 'taxes')
      .get('#resetButton').click().get('#searchInput')
      .type('guns', { delay: 100 }).should('have.value', 'guns')
      .get('#resetButton').click().get('#searchInput')
      .type('death', { delay: 100 }).should('have.value', 'death')
      .get('#resetButton').click().get('#searchInput')
      .type('drones', { delay: 100 }).should('have.value', 'drones')
      .get('#resetButton').click().get('#searchInput')
      .type('ocean', { delay: 100 }).should('have.value', 'ocean')
      .get('#resetButton').click().get('#searchInput')
      .type('garbage', { delay: 100 }).should('have.value', 'garbage')
      .get('#resetButton').click().get('#searchInput')

      // Delay each keypress by 0.1 sec
      .type('boats', { delay: 100 })
      .should('have.value', 'boats')
      .get('#resetButton').click().get('#searchInput')
  })
  it('Scroll to bottom of fishing result list', () => {

    // https://on.cypress.io/scrollTo

    // You can scroll to 9 specific positions of an element:
    //  -----------------------------------
    // | topLeft        top       topRight |
    // |                                   |
    // |                                   |
    // |                                   |
    // | left          center        right |
    // |                                   |
    // |                                   |
    // |                                   |
    // | bottomLeft   bottom   bottomRight |
    //  -----------------------------------

    // if you chain .scrollTo() off of cy, we will
    // scroll the entire window
    cy.get('#searchInput')
    .type('fishing', { delay: 100 }).should('have.value', 'fishing')
    cy.scrollTo('bottom')
    cy.scrollTo('top')
  })
})