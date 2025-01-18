# User CRUD API - NestJS com Prisma

API de cadastro de usuários desenvolvida com NestJS, Prisma ORM e MySQL com a ajuda da inteligência artificial claude.ai.

## Requisitos

- Node.js
- MySQL
- Git

## Instalação e Configuração

1. **Criar o projeto**
```bash
# Instalar NestJS CLI globalmente
npm i -g @nestjs/cli

# Criar novo projeto
nest new user-crud-api

# Entrar na pasta do projeto
cd user-crud-api
```

2. **Instalar dependências**
```bash
# Instalar Prisma e seu cliente
npm install @prisma/client prisma

# Instalar dependências para validação
npm install class-validator class-transformer

# Instalar tipos mapeados do NestJS
npm install @nestjs/mapped-types

# Instalar bcrypt para hash de senha
npm install bcrypt
npm install -D @types/bcrypt
```

3. **Configurar Prisma**
```bash
# Inicializar Prisma
npx prisma init
```

4. **Configurar banco de dados**
Crie um arquivo `.env` na raiz do projeto:
```env
DATABASE_URL="mysql://user:password@localhost:3306/user_crud_db"
```

5. **Configurar schema do Prisma**
No arquivo `prisma/schema.prisma`:
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

6. **Criar as tabelas**
```bash
# Criar primeira migração
npx prisma migrate dev --name init
```

7. **Iniciar a aplicação**
```bash
# Modo desenvolvimento
npm run start:dev
```

## Enviando para o GitHub

1. **Inicializar repositório Git**
```bash
# Inicializar Git
git init

# Adicionar arquivos
git add .

# Criar primeiro commit
git commit -m "first commit"
```

2. **Criar arquivo .gitignore**
```
# Dependências
node_modules
dist

# Ambiente
.env

# Logs
logs
*.log
npm-debug.log*

# IDE
.idea
.vscode

# Sistema operacional
.DS_Store
```

3. **Conectar e enviar para GitHub**
```bash
# Adicionar repositório remoto (substitua USER/REPO pelo seu usuário/repositório)
git remote add origin https://github.com/USER/REPO.git

# Enviar código para GitHub
git branch -M main
git push -u origin main
```

## Endpoints da API

- `POST /users` - Criar usuário
- `GET /users` - Listar usuários
- `GET /users/:id` - Buscar um usuário
- `PATCH /users/:id` - Atualizar usuário
- `DELETE /users/:id` - Deletar usuário

## Exemplo de requisição

Criar usuário:
```json
POST /users
{
    "name": "João Silva",
    "email": "joao@email.com",
    "password": "123456"
}
```

## Contribuindo

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request