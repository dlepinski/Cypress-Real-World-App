<!DOCTYPE html>
<html lang="pt-br">
<body>

  <h1 align="center">💸 Cypress Real World App - Projeto de Portfólio</h1>
  <p align="center"><strong>Responsável: Daniela Lepinski Souto</strong></p>

  <hr>

  <p>Este projeto é uma aplicação de pagamentos completa, utilizada para demonstrar cenários reais de automação de testes com Cypress. Ele foi adaptado por mim para servir como vitrine de estudos em Automação de QA, com foco em <strong>TypeScript</strong> e boas práticas de organização.</p>

  <h2>🚀 Como Instalar e Rodar o Projeto</h2>
  <p>Siga este guia passo a passo baseado na configuração de ambiente que realizei:</p>

  <h3>1. Pré-requisitos</h3>
  <ul>
    <li><strong>Node.js:</strong> Certifique-se de ter o Node instalado em sua máquina.</li>
    <li><strong>Yarn Classic (v1):</strong> Essencial para gerenciar as dependências deste projeto.</li>
  </ul>

  <h3>2. Instalação e Configuração</h3>
  <p>Abra o <strong>terminal do seu sistema (ou Git Bash)</strong>. Recomendo criar uma pasta organizada (como <code>C:/Projetos Teste</code> ou no <code>D:/</code>) e executar cada comando abaixo:</p>
  
  <p><em>Passo A: Acessar sua pasta de projetos e clonar o repositório</em></p>
  <pre><code>git clone [https://github.com/dlepinski/cypress-realworld-app.git](https://github.com/dlepinski/cypress-realworld-app.git)</code></pre>

  <p><em>Passo B: Entrar na pasta do projeto</em></p>
  <pre><code>cd cypress-realworld-app</code></pre>

  <p><em>Passo C: Instalar as dependências</em></p>
  <pre><code>yarn install</code></pre>

  <h3>3. Ligando o Servidor (O "Motor" da App)</h3>
  <p>No <strong>terminal do VS Code</strong> (ou em uma janela dedicada do Git Bash), execute o comando principal para subir o Front-end e o Back-end:</p>
  
  <pre><code>yarn dev</code></pre>

  <p align="right"><small>💡 <em>Dica: Caso a porta 3001 esteja ocupada, execute <code>taskkill -F -IM node.exe</code> no terminal para liberar o ambiente.</em></small></p>

  <hr>

  <h2>🧪 Onde encontrar as minhas Automações?</h2>
  <p>📍 <strong>Localização:</strong> <code>cypress/TestesApp/</code></p>

  <p>Os testes estão numerados para seguir o fluxo lógico de uso do sistema:</p>
  <ul>
    <li><strong>01-login.cy.ts:</strong> Valida o acesso ao sistema com usuários pré-cadastrados.</li>
    <li><strong>02-cadastro-bancario.cy.ts:</strong> Automatiza a criação de novas contas bancárias.</li>
  </ul>

  <h3>Como rodar os testes:</h3>
  <ol>
    <li>Com o servidor (<code>yarn dev</code>) rodando, abra um <strong>segundo terminal</strong> no VS Code.</li>
    <li>Execute o comando para abrir a interface do Cypress:</li>
  </ol>
  <pre><code>yarn cypress:open</code></pre>
  <ol start="3">
    <li>Na interface que abrir, selecione a pasta <strong>TestesApp</strong>.</li>
  </ol>

  <hr>

  <h2>🛠 Tecnologias e Organização</h2>
  <ul>
    <li><strong>Cypress + TypeScript:</strong> Maior segurança com código tipado.</li>
    <li><strong>Database JSON:</strong> Dados localizados em <code>data/database.json</code>.</li>
    <li><strong>Configuração:</strong> O arquivo <code>cypress.config.ts</code> prioriza a minha pasta personalizada.</li>
  </ul>

  <hr>

  <p align="center">
    <strong>Desenvolvido com 💜 por Daniela Lepinski Souto</strong><br>
    <a href="https://www.linkedin.com/in/dlepinski/">LinkedIn</a> | 
    <a href="https://github.com/dlepinski">GitHub</a>
  </p>

</body>
</html>
