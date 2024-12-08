# :file_cabinet: api

## Rotas da API:

- `GET /` - Rota inicial da aplicação

### Rotas de tarefas

- `GET /tasks` - Lista todas as tarefas cadastradas
- `POST /tasks` - Cria uma nova tarefa. É necessário enviar um payload no formato abaixo:

```
{
	"title": "Estudar MongoDB"
}
```

- `DELETE /tasks/:id` - Exclui a tarefa informada na URL.
- `PUT /tasks/:id` - Marca a tarefa como concluída informada na URL.
