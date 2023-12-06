describe('template spec', () => {
  const baseUrl = Cypress.env('baseUrl')

  // custom login function
  
  
  it('should have a link to go to login page on the home page', () => {
    cy.login('chakrouninfo@gmail.com', '12345678')
  
    
   //nous sommes rediriges sur la page d'accueil : le login a fonctionnée

  })
  it('should be able to logout', () => {
    
    cy.login('chakrouninfo@gmail.com', '123456789')
 
    cy.visit(baseUrl + '/account')
  
    cy.contains('Logout').click()
 
  })

  it.only('should be not connect if mail is not valid', () => {
    // arrange
    cy.visit(baseUrl + '/account/login')
    cy.get('input[name="email"]').type( 'tati@gmail.com')
    cy.get('input[name="password"]').type( '12345678')
  
    // act
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid email or password')
  
  })
  it('should be not connect if password is not valid', () => {
    // Demander à Cypress de se rendre sur une page web
    cy.visit(baseUrl + '/account/login')
    cy.get('input[name="email"]').type( 'chakrouninfo@gmail.com')
    cy.get('input[name="password"]').type( '11223344')
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid email or password')
 
  })
})

 