import { getGreeting } from '../support/app.po';

describe('kirbys-tic-tac-toe-nx', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome kirbys-tic-tac-toe-nx');
  });
});
