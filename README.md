# :white_check_mark: to-do-list

Projeto desenvolvido para a disciplina Tópicos Especiais em Backend II, do curso Tecnologia em Sistemas para Internet do IFSul Campus Charqueadas.

## Como executar o projeto

Clonar o repositório:

```
git clone https://github.com/roazambuja/to-do-list.git
```

### Back-end

1. Acessar a pasta `api`
2. Rodar o comando `npm install`
3. Configure o arquivo `.env`. Para isso, copie o conteúdo do arquivo `.env.sample` e crie o arquivo `.env`. No arquivo `.env` recém-criado, cole o conteúdo que você copiou do arquivo `.env.sample` e altere o valor da variável para a URL do seu banco de dados MongoDB.
4. Rodar o comando `npm run dev`
5. O servidor estará disponível em <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a>.

Um detalhamento sobre as funcionalidades da API está disponível no [README](./api/README.md) da pasta `api`.

### Front-end

1. Acessar a pasta `front-end`
2. Rodar o comando `npm install`
3. Rodar o comando `npm run dev`
4. A aplicação estará disponível em <a href="http://localhost:5173/" target="_blank">http://localhost:5173/</a>.

## :hammer_and_wrench: Ferramentas utilizadas

### Back-end

- NodeJS
- Express
- TypeScript
- MongoDB

### Front-end

- React
- HTML
- CSS
