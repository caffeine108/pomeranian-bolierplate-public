describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/dashboard');

    cy.contains('Ćwiczenia').click();

    cy.visit('http://localhost:3000/calendar');
  });
});
