# 🚀 Desafio QA - Automação de Testes com Cypress

---

## 📌 Objetivo Geral

O objetivo deste projeto é realizar a automação de testes no site [https://bstackdemo.com/](https://bstackdemo.com/), cobrindo os cenários de login e adição de itens no carrinho. O projeto utiliza o framework **Cypress** para automação dos testes e está estruturado de acordo com as melhores práticas.

---

## 🏆 Estrutura do Desafio

O desafio foi dividido em 3 partes:

1. **Planejamento de Testes:** Descrição detalhada dos testes a serem realizados.  
2. **Execução dos Testes:** Realização dos cenários planejados, criação de métricas e registro de defeitos.  
3. **Automação dos Testes:** Automação do caso de teste principal utilizando o Cypress e documentação completa.

---

## 📌 **Parte 1 - Planejamento de Testes**

### 🎯 Objetivo da Parte 1
Criar um documento descrevendo os testes a serem realizados no site [https://bstackdemo.com/](https://bstackdemo.com/).

### 🔍 Escopo dos Testes

Os testes devem incluir:

- **Login na plataforma:** Validando se o usuário consegue acessar a área restrita corretamente.  
- **Adição de itens no carrinho:** Verificando a adição de itens ao carrinho e validação dos preços no subtotal.  
- **Mensagens de sucesso:** Validar mensagens exibidas após a conclusão de ações relevantes.

Além disso, devem ser abordadas as seguintes verificações:

1. Validação da existência dos elementos-chave na tela.  
2. Validação do fluxo entre login, acesso ao carrinho e checkout.  
3. Tratamento de falhas caso não seja possível realizar alguma ação.  
4. Evidenciar e registrar qualquer defeito encontrado.

---

## 🏗️ **Parte 2 - Execução dos Testes**

### 🎯 Objetivo da Parte 2
Executar os testes planejados na **Parte 1**, evidenciar os resultados e criar métricas de execução.

### Cenários Executados:

- **Login na plataforma.**  
- **Adição de itens ao carrinho.**  
- **Validação de cálculos no subtotal.**  
- **Execução de checkout com validações.**

---

## 🤖 **Parte 3 - Automação dos Testes**

### 🎯 Objetivo da Parte 3
Automatizar um cenário de teste principal utilizando o **framework Cypress**, conforme o seguinte cenário:

---

## 📜 Estrutura do Projeto  

```plaintext
WORKFLOW/
│
├── cypress/
│   ├── downloads/                       # Pasta onde os arquivos baixados serão armazenados  
│   │   └── confirmation.pdf  
│   │
│   ├── e2e/                              # Caminho principal para os testes de E2E  
│   │   ├── carrinho/
│   │   │   └── automacao-carrinho.cy.js  # Automação da lógica do carrinho  
│   │   │
│   │   └── user-journey-settings/  
│   │       ├── pages/  
│   │       │   ├── desafio-estuda-login.cy.js  # Testes do fluxo de login  
│   │       │   └── user-information.cy.js  
│   │       │
│   │       └── services/  
│   │           ├── calculo-desafio.cy.js  
│   │           └── validacao-carrinho.cy.js  
│   │
└── README.md                              # Arquivo com as instruçõe
                         # Arquivo com as instruções principais para execução
```

---

### 💻 **Extensões e Plugins no VSCode**

- `tal7aouy.icons`  
- `shd101wyy.markdown-preview-enhanced`  
- `MS-CEINTL.vscode-language-pack-pt-BR`  
- `tomoki1207.pdf`  
- `npm i -D @faker-js/faker` | Instalar Biblioteca de Dados Fakes. 
---

## 🚀 **Como Executar os Testes com Cypress**

Após configurar o ambiente, siga estes passos:

### 1️⃣ **Instalação das Dependências**

Certifique-se de ter as dependências instaladas. No diretório raiz do projeto, execute:  

```bash
npm install
```

ou

```bash
yarn install
```

---

### 2️⃣ **Abrindo o Cypress com Interface Gráfica**

Execute o seguinte comando para abrir a interface gráfica do Cypress:  

```bash
npx cypress open
```

1. Quando a interface abrir, selecione o teste desejado no painel.  
2. Clique no cenário `automacao-carrinho.cy.js` para execução.  

---

### 3️⃣ **Execução no Modo Headless**

Caso prefira executar os testes sem abrir a interface gráfica, utilize o modo headless:  

```bash
npx cypress run
```

---

### 🔎 **Observação**  

```

Caso encontre algum erro ou dificuldade, verifique as dependências instaladas e certifique-se de seguir todas as instruções no `README.md`. Se persistir, entre em contato.