describe('Logout with the logout button', () => {
  it('can logout successfully', () => {
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
    cy.get('#feedbackModal > div > div > div.modal-footer > button')
      .contains('Close')
      .should('be.visible')
      .click();
    cy.wait(2000);

    cy.get('#dropdownMenuButton').click();
    cy.get(
      'body > header > div > nav > div.text-end.d-flex.flex-wrap.gap-4.align-items-center > div.dropdown.show > div > a:nth-child(2)'
    )
      .contains('Log out')
      .click();
    cy.wait(2000).should(() => {
      expect(localStorage.token).eq(undefined);
    });
  });
});
