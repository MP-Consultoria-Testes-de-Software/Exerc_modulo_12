/// <reference types="cypress" />

context('Funcionalidade Login', () =>{

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/' )
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain','Minha conta') 

    })

    it('deve exibir uma mensagem de erro ou inserir usuário invalido', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/' )
        cy.get('#username').type('ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain','Erro: a senha fornecida')
    })

    
    it('deve exibir uma mensagem de erro ou inserir ussario ou senha invalida', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/' )
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain','Erro: a senha fornecida para o e-mail')



        
    })
})


