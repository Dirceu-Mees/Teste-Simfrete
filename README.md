# 🎯Olá, Meu primeiro desafio de automação
Este é o projeto que desenvolvi para o desafio de QA Junior. Como estou em constante aprendizado, foquei em criar a estrutura organizada e funcional com o Playwright e o Typescript, como foi a primeira vez que utilizei estas ferramentas, precisei entender como funcionava utilizando ajuda do Google e da documentação.
## 🧪 O que eu fiz neste projeto ?
Organização com Pages para não deixar o código bagunçado, separei os elementos da tela, (botões e campos) da lógica dos testes. Na Pasta /pages está o mapa de cada página, para Obs: caso o servidor mude ou aconteça alguma alteração no site, eu não preciso alterar todo o código, apenas nesse lugar.
## ✅ Tetes de Tela (Front-end)
* Automatizei o Login, testando o que acontece quando digitamos a senha errada.
* Usei o ignoreCase para o teste não falhar por uma letra maiúscula ou minúscula.
## ✅ Testes de API (Back-end)
* Criei o código que cadastra um novo usuário “por baixo dos panos”.
* Para o teste não dar erro, foi utilizado no código o (date.now()) que gera um e-mail diferente toda vez que o teste roda.

### 🛠️ Ferramentas utilizadas 
* Playwright: para robôs de teste;
* Typescript: linguagem do projeto;
* GitHub: para salvar o Versionamento de código.
## 💡Como você pode rodar aí: 💻
1- Baixe o projeto e rode **‘ npm install ’** no terminal para instalar as ferramentas.
2- Para ver o Robô funcionando na sua tela, use: **‘ npx playwright test –ui ‘**.
3- Para rodar rapidinho só no terminal, use **‘ npx playwright test ‘**. 🚀 💻





