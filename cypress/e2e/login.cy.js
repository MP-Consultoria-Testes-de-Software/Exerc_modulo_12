/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login', () =>{

    beforeEach(() => {
        cy.visit('minha-conta' )
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {

        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain','Minha conta') 

    })

    
    it('Deve fazer login com sucesso - usando arquivo de dados', () => {

        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha, {log:false})
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain','Minha conta') 

    })

    it.only('Deve fazer login com sucesso - usando fixture', () => {
        cy.fixture('perfil').then( dados => {

            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log:false})
            cy.get('.woocommerce-form > .button').click()
    
            cy.get('.page-title').should('contain','Minha conta') 
        })
    });

    it('deve exibir uma mensagem de erro ou inserir usuário invalido', () => {

        cy.get('#username').type('ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain','Erro: a senha fornecida')
    })

    
    it('deve exibir uma mensagem de erro ou inserir ussario ou senha invalida', () => {

        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain','Erro: a senha fornecida para o e-mail')



        
    })
})


