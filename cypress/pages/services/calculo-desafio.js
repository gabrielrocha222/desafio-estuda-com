export class CalculoDesafio {
  somarValores(valor1, valor2) {
    return valor1 * valor2;
  }

  validarSomaEsperada(quantidade, precoUnitario) {
    const totalCalculado = this.somarValores(quantidade, precoUnitario);
    cy.log(`Total calculado: ${totalCalculado}`);
    return totalCalculado;
  }
}
