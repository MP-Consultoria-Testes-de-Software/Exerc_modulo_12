/// <reference types="cypress" />
//var faker = require('faker')

describe('Funcionalidade Página de Produtos', () => {
    

    beforeEach(() => { 
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.eq(3)
            .contains('Abominable Hoodie')
            .click()
    });    

    it('Deve adicionar produto no carrinho', () => {

        var qtd_item_compra = 7 

        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie')
            .click()
            
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text')
            .clear()
            .type(7)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', qtd_item_compra)

        cy.get('.woocommerce-message').should('contain', qtd_item_compra + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')


    });    

    it.only('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
        
        cy.addProdutos('Abominable Hoodie', 'M', 'Blue', 5) 

    });
    
    it.only('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
        
        cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Black', 2) 

    });

});
