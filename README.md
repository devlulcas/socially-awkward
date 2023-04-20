# SOCIALLY AWKWARD

You will need PNPM, Caddy and NodeJS installed.

## RUN

Run the following commands in the root directory of the project.

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
- [Caddy](https://caddyserver.com/)
