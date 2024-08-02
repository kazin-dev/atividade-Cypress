/// <reference types="cypress" />

describe("Gerenciamento de Contatos", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/");
    });

    it("deve adicionar um contato", () => {
        cy.get('input[type="text"]').type("Kauã");
        cy.get('input[type="email"]').type("exemplo@gmail.com");
        cy.get('input[type="tel"]').type("10 123456789");
        cy.get('button[type="submit"]').click();

      // Verifique se o contato foi adicionado
        cy.get('#root > div > div > div').should('contain', 'Kauã');
    });

    it("deve alterar um contato", () => {
        cy.get('#root > div > div > div:nth-child(2) > div.sc-gueYoa.jWEbWB > button.edit').click();

        cy.get('input[type="text"]').type("Alterado");
        cy.get('input[type="email"]').type("alterado@gmail.com");
        cy.get('input[type="tel"]').type("10 987654321");

        cy.get('button.alterar').click();
    });

    it("deve excluir um contato", () => {
      // Antes de excluir, conte o número de contatos
        cy.get('#root > div > div > div').its('length').then(initialLength => {
        // Clique no botão de exclusão do primeiro contato
        cy.get('#root > div > div > div:nth-child(2)').first().within(() => {
            cy.get('button.delete[type="button"]').click();
        });

        });
    });
});
