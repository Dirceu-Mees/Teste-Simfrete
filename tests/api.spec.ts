
import { test, expect } from '@playwright/test';



const emailUnico = `junior_qa_${Date.now()}@teste.com`;

test.describe('API ServeRest - Usuários', () => {

    test('Deve cadastrar um novo usuário via API', async ({ request }) => {
        const response = await request.post('https://serverest.dev/usuarios', {
            data: {
                nome: "Candidato Junior",
                email: emailUnico,
                password: "teste",
                administrador: "true"
            }
        });

        
        expect(response.status()).toBe(201);

        const body = await response.json();
        expect(body.message).toBe('Cadastro realizado com sucesso');

        
        console.log(`Utilizador criado: ${emailUnico}`);
    });

    test('Deve listar usuários e validar o contrato', async ({ request }) => {
        const response = await request.get('https://serverest.dev/usuarios');
        expect(response.status()).toBe(200);

        const body = await response.json();        
        expect(body).toHaveProperty('usuarios');
    });
});
