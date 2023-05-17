describe('The user cannot submit the register form with invalid inputs and is shown a message', () => {
  it('can register new user successfully', () => {
    cy.clearLocalStorage();
    cy.visit('/');
    cy.wait(500);

    cy.get('body > header > div.no-token-banner > div > a:nth-child(2)')
      .contains('Register')
      .should('be.visible')
      .click();
    cy.wait(500);

    cy.get('#username').type(Cypress.env('user').username);
    cy.get('#email').type(Cypress.env('user').badEmail);
    cy.get('#avatar').type(Cypress.env('user').avatar);
    cy.get('#newpassword').type(Cypress.env('user').newPassword);

    cy.get('#form-register > button')
      .contains('Create')
      .should('be.visible')
      .click();
    cy.wait(2000);

    cy.on('#feedbackModal > div > div > div.modal-body > div', (Text) => {
      expect(Text).contains('Unsuccessful');
    });
  });
});
