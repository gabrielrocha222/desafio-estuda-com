const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://bstackdemo.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Configurando tamanho da janela padrão para 1366x798
    viewportWidth: 1366,
    viewportHeight: 768,
  },
});
