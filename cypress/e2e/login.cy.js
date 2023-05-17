describe('Login and access user profile', () => {
  it('can login successfully', () => {
    cy.clearLocalStorage();
    cy.visit('/');
    cy.wait(500);

    cy.get('body > header > div.no-token-banner > div > a:nth-child(1)')
      .contains('Login')
      .should('be.visible')
      .click();
    cy.wait(500);

    cy.get('#existedEmail').type(Cypress.env('user').email);
    cy.get('#loginPassword').type(Cypress.env('user').password);
    cy.get('#form-login > button')
      .contains('Submit')
      .should('be.visible')
      .click();
    cy.wait(500);

    cy.on('#feedbackModal > div > div > div.modal-body > div', (Text) => {
      expect(Text).contains('Successfully logged in');
    });
  });
});
