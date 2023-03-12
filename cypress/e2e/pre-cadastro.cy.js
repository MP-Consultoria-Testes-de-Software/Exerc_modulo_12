/// <reference types="cypress" />
var faker = require('faker')

describe('Funcionalidade Pré Cadastro', () => {

    
    beforeEach(() => {
        cy.visit('minha-conta' )
    });

    it('Deve completar o pré-cadastro com sucesso', () => {
        //cy.get('#reg_email').type('marciopinheiro@ebac.com')

        
        let first_name_facker = faker.name.firstName()
        let last_name_facke = faker.name.lastName()
        let email_faker = faker.internet.email(first_name_facker)

        cy.get('#reg_email').type(email_faker)
        cy.get('#reg_password').type('mpebac')

        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').type(first_name_facker)
        cy.get('#account_last_name').type(last_name_facke)

        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')



    })

    it.only('Deve completar o cadastro com sucesso com comandos customizados', () => {
        let emailFaker2 = faker.internet.email()
        cy.preCadastro( emailFaker2, 'senha@1234', 'marcio', 'pinheiro')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});