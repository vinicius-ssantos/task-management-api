# Task Management API

![NestJS](https://img.shields.io/badge/NestJS-10-red?style=for-the-badge&logo=nestjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?style=for-the-badge&logo=postgresql)
![TypeORM](https://img.shields.io/badge/TypeORM-ORM-orange?style=for-the-badge)
![JWT](https://img.shields.io/badge/JWT-Authentication-black?style=for-the-badge&logo=jsonwebtokens)
![Jest](https://img.shields.io/badge/Jest-Tests-c21325?style=for-the-badge&logo=jest)

REST API for task management, built with NestJS, TypeScript, PostgreSQL, TypeORM and JWT authentication.

This project demonstrates a structured backend API with authentication, task CRUD operations, validation, database migrations and automated test scripts.

---

## Features

- User creation
- User authentication
- JWT-protected task routes
- Create tasks
- List tasks
- Filter tasks by query parameters
- Find task by ID
- Update task
- Delete task
- DTO validation with `class-validator`
- PostgreSQL persistence with TypeORM
- Database migration scripts

---

## Tech stack

- Node.js
- NestJS 10
- TypeScript
- PostgreSQL
- TypeORM
- JWT
- bcrypt
- class-validator
- Jest
- ESLint
- Prettier

---

## Architecture overview

The project follows NestJS modular architecture:

```txt
src
├── auth
├── db
├── task
├── users
├── app.controller.ts
├── app.module.ts
└── main.ts
```

Main flow:

```txt
Controller -> Service -> TypeORM Repository -> PostgreSQL
```

---

## Main endpoints

### Auth

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/login` | Authenticates a user and returns an access token |

### Users

| Method | Endpoint | Description |
|---|---|---|
| POST | `/users` | Creates a user |

### Tasks

Task routes are protected by JWT authentication.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/task` | Creates a task |
| GET | `/task` | Lists tasks, with optional filters |
| GET | `/task/:id` | Finds a task by ID |
| PUT | `/task/:id` | Updates a task |
| DELETE | `/task/:id` | Deletes a task |

---

## Task payload example

```json
{
  "title": "Study NestJS",
  "description": "Practice modules, controllers, services and guards",
  "status": "TO_DO",
  "expirationDate": "2026-05-01"
}
```

Supported status values:

```txt
TO_DO
IN_PROGRESS
DONE
```

---

## Authentication example

```http
POST /auth/login
Content-Type: application/json
```

```json
{
  "username": "vinicius",
  "password": "123456"
}
```

Use the returned token in protected routes:

```http
Authorization: Bearer <access-token>
```

---

## Running locally

### Requirements

- Node.js
- npm
- PostgreSQL

### Install dependencies

```bash
npm install
```

### Environment variables

Create a `.env` file in the project root:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=task_management
JWT_SECRET=your_secret
```

Adjust the values according to your local environment.

### Database

Create a PostgreSQL database:

```sql
CREATE DATABASE task_management;
```

### Run migrations

```bash
npm run migration:run
```

### Start the application

```bash
npm run start:dev
```

---

## Available scripts

```bash
npm run build
npm run start
npm run start:dev
npm run start:prod
npm run lint
npm run test
npm run test:e2e
npm run test:cov
npm run migration:generate --name=<migration-name>
npm run migration:run
npm run migration:revert
```

---

## Tests

Run unit tests:

```bash
npm run test
```

Run test coverage:

```bash
npm run test:cov
```

Run e2e tests:

```bash
npm run test:e2e
```

---

## Next improvements

- Add Swagger/OpenAPI documentation
- Add Docker Compose for PostgreSQL
- Add request/response examples for every endpoint
- Add CI pipeline with GitHub Actions
- Improve seed data for local testing
- Add more integration tests
