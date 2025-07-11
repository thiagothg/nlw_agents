# NLW Agents

Projeto desenvolvido durante o evento **NLW (Next Level Week)** da Rocketseat, focado em criar uma aplicação de agentes inteligentes.

## 🚀 Tecnologias

### Backend
- **Node.js** - Runtime JavaScript
- **Fastify** - Framework web rápido
- **Drizzle ORM** - ORM TypeScript-first
- **PostgreSQL** - Banco de dados relacional
- **Zod** - Validação de schemas
- **TypeScript** - Tipagem estática

### Frontend
- **React 19** - Biblioteca UI
- **Vite** - Build tool e dev server
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS
- **React Query** - Gerenciamento de estado
- **React Router** - Roteamento
- **Radix UI** - Componentes acessíveis

### Ferramentas
- **Docker** - Containerização
- **Biome** - Linter e formatter
- **Ultracite** - Configuração de projeto

## 📁 Estrutura do Projeto

```
nlw_react/
├── server/          # Backend API
├── web/            # Frontend React
├── docker/         # Configurações Docker
└── docker-compose.yml
```

## 🛠️ Setup

### Pré-requisitos
- Node.js 18+
- Docker e Docker Compose
- npm ou yarn

### 1. Clone o repositório
```bash
git clone <repository-url>
cd nlw_react
```

### 2. Configure o banco de dados
```bash
docker compose up -d
```

### 3. Configure o backend
```bash
cd server
cp .env.example .env
npm install
npx drizzle-kit generate
npx drizzle-kit migrate
npm run db:seed
npm run dev
```

### 4. Configure o frontend
```bash
cd web
npm install
npm run dev
```

## 🎯 Funcionalidades

- Criação de salas de agentes
- Listagem de salas disponíveis
- Interface responsiva e moderna
- API RESTful com validação
- Banco de dados PostgreSQL

## 📝 Scripts Disponíveis

### Backend
- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run db:seed` - Popula banco com dados de teste

### Frontend
- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview da build

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env` na pasta `server/`:

```env
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

## 📄 Licença

Este projeto foi desenvolvido durante o evento NLW da Rocketseat. 