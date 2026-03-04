import { Locator, Page } from '@playwright/test';

export class LoginPage {
    
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;       
        this.emailInput = page.locator('input[data-testid="email"]');
        this.passwordInput = page.locator('input[data-testid="senha"]');
        this.loginButton = page.locator('button[data-testid="entrar"]');
    }
    
    async navegar() {
        await this.page.goto('https://front.serverest.dev/login');
    }

    
    async realizarLogin(email: string, senha: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(senha);
        await this.loginButton.click();
    }
}