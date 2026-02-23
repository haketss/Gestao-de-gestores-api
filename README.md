# Gestão de Gestores API

API para gerenciamento de gestores e eventos, desenvolvida com Node.js, Express e Sequelize.

## 🚀 Como rodar o projeto

### Pré-requisitos

- Node.js ou Bun instalado.
- Banco de dados PostgreSQL (ou o configurado em `src/database/config.js`).

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/haketss/Gestao-de-gestores-api.git
   cd Gestao-de-gestores-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   bun install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto (use o `.env.example` se disponível ou baseie-se no `server.js` e controllers):
   ```env
   PORT=8080
   SALT=10
   TOKEN_SECRET=sua_chave_secreta
   TOKEN_EXPIRES_IN=1d
   ```

### Banco de Dados

1. Certifique-se de que as configurações em `src/database/config.js` estão corretas.
2. Crie o banco de dados:
   ```bash
   npx sequelize db:create
   ```
3. Rode as migrations:
   ```bash
   npx sequelize db:migrate
   ```
4. (Opcional) Popule o banco com dados iniciais:
   ```bash
   npm run populate
   ```

### Iniciando a API

```bash
npm start
# ou
bun start
```
A API estará disponível em: `http://localhost:8080`

---

## 🛠️ Endpoints da API

### Autenticação & Usuários

| Método | Rota | Descrição | Autenticação |
| :--- | :--- | :--- | :--- |
| POST | `/register` | Cadastra um novo usuário | Não |
| POST | `/login` | Realiza login e retorna o token JWT | Não |
| GET | `/login` | Lista todos os usuários cadastrados | Sim |

### Gestores

| Método | Rota | Descrição | Autenticação |
| :--- | :--- | :--- | :--- |
| POST | `/gestor` | Cria um novo gestor | Sim |
| GET | `/gestors` | Lista todos os gestores | Sim |
| PUT | `/gestor/:id` | Atualiza os dados de um gestor | Sim |
| DELETE | `/gestor/:id` | Remove um gestor | Sim |

### Eventos

| Método | Rota | Descrição | Autenticação |
| :--- | :--- | :--- | :--- |
| POST | `/evento` | Cria um novo evento | Sim |
| GET | `/eventos` | Lista todos os eventos | Sim |
| PUT | `/evento/:id` | Atualiza os dados de um evento | Sim |
| DELETE | `/evento/:id` | Remove um evento | Sim |

---

## 🔒 Autenticação

As rotas protegidas esperam um token JWT no Header da requisição:

```http
Authorization: Bearer <seu_token_jwt>
```

---

## 📁 Estrutura de Pastas

```text
src/
├── controllers/ # Lógica das rotas
├── database/    # Configurações e conexões com o banco
├── middleware/  # Middlewares (ex: auth)
├── models/      # Modelos do Sequelize
├── routes.js    # Definição das rotas
├── server.js    # Ponto de entrada da aplicação
└── utils/       # Helpers e utilitários
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
