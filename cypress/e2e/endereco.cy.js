/// <reference types="cypress" />
import enderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')


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
        enderecoPage.editarEnderecoFaturamento('marcio', 'pinheiro', 'empresa 1', 'Brasil', 'julia cesar ferreia', '123', 'São Paulo', 'São Paulo', '09760300', '858967452', 'email@email.com' )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        //cadastro
    });

    
    it.only('Deve fazer cadastro de faturamento com sucesso - Usando Arquivo de Dados', () => {
        // login
        enderecoPage.editarEnderecoFaturamento( 
            dadosEndereco[1].nome, 
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email )
             
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        //cadastro
    });


});