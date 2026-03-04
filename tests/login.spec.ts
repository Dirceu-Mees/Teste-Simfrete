import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Funcionalidade de Login', () => {

    test('Deve exibir erro ao tentar logar com senha inválida', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navegar();
        await loginPage.realizarLogin('teste_junior@qa.com', 'senha_errada');

        
        const mensagemErro = page.locator('.alert').getByText('Email e/ou senha inválidos');

        await expect(mensagemErro).toBeVisible({ timeout: 7000 });
        await expect(mensagemErro).toContainText('Email e/ou senha inválidos', { ignoreCase: true });
    });

    test('Deve realizar login com sucesso', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navegar();
        await loginPage.realizarLogin('junior_qa_1772649539660@teste.com', 'teste');       
        await expect(page).toHaveURL(/.*home/, { timeout: 10000 });

        const boasVindas = page.locator('h1');
        await expect(boasVindas).toContainText('Bem Vindo', { ignoreCase: true });
    });
});