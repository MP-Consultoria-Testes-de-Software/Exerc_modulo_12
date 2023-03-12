/// <reference types="cypress" />

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta' )
        //cy.login( 'aluno_ebac@teste.com', 'teste@teste.com')  
        cy.fixture('perfil').then(dados => {
            cy.login( dados.usuario, dados.senha )
        })

    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        // login
        
        //cadastro
    });
});