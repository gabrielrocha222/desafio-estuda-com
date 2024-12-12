export class Carrinho {
  adicionarProduto() {
    cy.get('#\\31  > .shelf-item__buy-btn').click();
  }

  validarProdutoNoCarrinho(nomeProduto) {
    cy.get('.float-cart__shelf-container')
      .contains('.title', nomeProduto)
      .should('be.visible');
      cy.get('.float-cart__shelf-container > .shelf-item > .shelf-item__price > div > :nth-child(2)').click()
  }

  validarPrecoNoSubtotal() {
    cy.get('.float-cart__footer .sub-price__val')
      .should('contain.text', '$ 1598.00');
  }
}
