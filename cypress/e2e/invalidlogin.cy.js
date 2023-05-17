describe('The user cannot submit the login form with invalid credentials and is shown a message', () => {
  it('shows a message when the form has invalid credentials', () => {
    cy.visit('/');
    cy.wait(500);

    cy.get('body > header > div.no-token-banner > div > a:nth-child(1)')
      .contains('Login')
      .should('be.visible')
      .click();
    cy.wait(500);

    cy.get('#existedEmail').type(Cypress.env('user').email);
    cy.get('#loginPassword').type(Cypress.env('user').wrongPassword);

    cy.get('#form-login > button')
      .contains('Submit')
      .should('be.visible')
      .click();
    cy.wait(2000);

    cy.on('#feedbackModal > div > div > div.modal-body > div', (Text) => {
      expect(Text).contains('Unsuccessful');
    });
  });
});
