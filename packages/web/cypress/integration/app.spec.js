describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });

  it('works', () => {
    cy.visit('/');

    cy.contains('save to reload');

    cy.get('[data-testid=my-button]');
  });
});
