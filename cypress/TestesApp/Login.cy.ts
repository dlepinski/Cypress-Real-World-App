describe('Funcionalidade de Login', () => {
    it('Deve realizar login com um usuário válido', () => {
        // 1. Visita a página inicial de login
        cy.visit('/signin');

        // 2. Preenche o formulário com dados de um usuário padrão do projeto
        // Usuário: Heath74 / Senha: s3cret
        cy.get('#username').type('dlepinski');
        cy.get('#password').type('Dani152659');

        // 3. Clica no botão de entrar
        cy.get('[data-test="signin-submit"]').click();

        // 4. Validação: Verifica se o login foi feito com sucesso 
        // checando se a URL mudou ou se o nome do usuário aparece
        cy.url().should('include', '/');
        cy.get('[data-test="sidenav-username"]').should('contain', 'dlepinski');
    });
});