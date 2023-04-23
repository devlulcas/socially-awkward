# SOCIALLY AWKWARD

You will need PNPM, Caddy, NodeJS, Docker and Docker Compose installed.

## RUN

Run the following commands in the root directory of the project.

- Run docker-compose

```bash
docker-compose up -d
```

- In another terminal, run the following command to watch the logs from mongo

```bash
docker logs socially-awkward-mongo
```

- If you want to bash into the mongo container

```bash
docker exec -it socially-awkward-mongo bash
```

- Install dependencies

```bash
pnpm install
```

- Run the project in development mode

```bash
pnpm dev
```

- Run Caddy server

```bash
caddy start
```

- Access the project at [https://socially-awkward.localhost/](https://socially-awkward.localhost/)

```
https://socially-awkward.localhost/   -> http://localhost:5173 (apps/web)

https://api.socially-awkward.localhost/  -> http://localhost:3000 (apps/api)
```

Caddy does a reverse proxy to the apps.

# STACK

- [NestJS](https://nestjs.com/)
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Caddy](https://caddyserver.com/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
