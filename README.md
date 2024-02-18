# Kaleka Map Frontend

Kaleka is a NGO based in Bali, Indonesia. Kaleka Map Frontend, is a frontend or a client for website, used to show who isis a NGO based in Bali, Indonesia. 
Kaleka Map Frontend, is a frontend or a client for website, used to show who is Kaleka and a distribution map through a clickable circle.

Technology stack used are:

- NextJS
- TypeScript
- Tailwind
- PNPM
- Docker
- Makefile
- Sentry

## Getting Started

First, run the development server:

```bash
pnpm install
cp .env.example .env.local # fill the required value in env (API and Sentry token)
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

To run the production server:

```bash
cp .env.example .env.local # fill the required value for production
apt install make # for debian/ubuntu, use proper package manager for your OS
make build
make run
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

To stop production server:

```bash
apt install make # for debian/ubuntu, use proper package manager for your OS
make stop
make remove
```
