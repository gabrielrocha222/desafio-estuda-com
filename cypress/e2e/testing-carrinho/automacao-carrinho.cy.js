import { Login } from "../../pages/Login/desafio-estuda-login.js";
import { Carrinho } from "../../pages/Carrinho/validacao-carrinho.js";
import { CalculoDesafio } from "../../pages/services/calculo-desafio.js";
import { UserInformation } from "../../fixtures/user-information.js";


const login = new Login();
const carrinho = new Carrinho();
const calculo = new CalculoDesafio();
const userInfo = new UserInformation();

describe("Automação de Carrinho", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve realizar login, adicionar um produto ao carrinho, validar o cálculo do subtotal e clicar no botão de checkout e fazer download da nota", () => {
    login.loginComSucesso(); // Realiza o login
    carrinho.adicionarProduto();
    cy.screenshot();
    carrinho.validarProdutoNoCarrinho("iPhone 12");
    // Adiciona produto ao carrinho e valida

    carrinho.validarPrecoNoSubtotal();
    const somaEsperada = calculo.validarSomaEsperada(2, 799);
    cy.log(`Soma esperada: ${somaEsperada}`);
    // Valida o preço no subtotal

    // Clica no botão de checkout
    cy.get(".buy-btn").should("be.visible").and("not.be.disabled").click(); // Clica no botão de checkout

    // Preenche informações do usuário
    cy.get("#firstNameInput").type(userInfo.firstName);
    cy.get("#lastNameInput").type(userInfo.lastName);
    cy.get("#addressLine1Input").type(userInfo.address);
    cy.get("#postCodeInput").type(userInfo.postalCode);
    cy.get("#provinceInput").type(userInfo.province);

    cy.get("#checkout-shipping-continue").click();
    cy.screenshot();

    // Faz download do documento "nota"
    cy.get("#downloadpdf").click();
    cy.wait(5000);
    cy.get(".button").click();
  });
});
