

src/
├── application/         # Camada de aplicação (casos de uso, serviços e lógica de negócios)
│   ├── use-cases/       # Casos de uso específicos (ex: criação de rotas)
│   └── services/        # Serviços (ex: manipulação de dados ou integrações externas)
│
├── domain/              # Camada de domínio (entidades e regras de negócio)
│   ├── entities/        # Entidades principais (ex: Room, Route)
│   └── interfaces/      # Interfaces e contratos (ex: repositórios, serviços externos)
│
├── infrastructure/      # Camada de infraestrutura (interações com o mundo externo)
│   ├── database/        # Configurações e repositórios do banco de dados
│   │   ├── models/      # Modelos do banco (ex: ORM como Prisma ou Sequelize)
│   │   └── repositories/ # Implementações de repositórios
│   ├── http/            # Configurações do servidor HTTP e middlewares
│   └── config/          # Configurações gerais (ex: variáveis de ambiente)
│
├── presentation/        # Camada de apresentação (controladores e rotas)
│   ├── controllers/     # Controladores que lidam com requisições HTTP
│   └── routes/          # Definição das rotas da API
│
├── shared/              # Código compartilhado entre diferentes camadas
│   ├── utils/           # Funções utilitárias (ex: validação, formatação)
│   ├── errors/          # Definição de erros customizados
│   └── middlewares/     # Middlewares globais para a aplicação
│
├── tests/               # Testes automatizados
│   ├── unit/            # Testes unitários
│   ├── integration/     # Testes de integração
│   └── e2e/             # Testes end-to-end
│
├── main.ts              # Arquivo principal para inicializar a aplicação
└── app.ts               # Configuração da aplicação (ex: instância do servidor)
