# Docker Guide for React-Node-Management Project

This guide will help you run the project using Docker and Docker Compose.

## Prerequisites

- Docker Desktop installed ([Download here](https://www.docker.com/products/docker-desktop))
- Docker Compose (included with Docker Desktop)

## Quick Start

### 1. Build and Run with Docker Compose

Navigate to the project root directory and run:

```bash
cd React-Node-Management
docker-compose up --build
```

This will:
- Build both frontend and backend Docker images
- Start both containers
- Frontend will be available at `http://localhost:3000`
- Backend API will be available at `http://localhost:5000`

### 2. Run in Detached Mode (Background)

```bash
docker-compose up -d --build
```

### 3. View Logs

```bash
# View all logs
docker-compose logs

# View specific service logs
docker-compose logs frontend
docker-compose logs backend

# Follow logs in real-time
docker-compose logs -f
```

### 4. Stop the Containers

```bash
docker-compose down
```

### 5. Stop and Remove Volumes

```bash
docker-compose down -v
```

## Individual Container Commands

### Build Images Separately

```bash
# Build backend
docker build -t portfolio-backend ./backend

# Build frontend
docker build -t portfolio-frontend ./frontend
```

### Run Containers Individually

```bash
# Run backend
docker run -d -p 5000:5000 --name backend portfolio-backend

# Run frontend (requires backend to be running)
docker run -d -p 80:80 --name frontend --link backend:backend portfolio-frontend
```

## Development Mode with Docker

For development with hot-reload, you can create a `docker-compose.dev.yml`:

```yaml
version: '3.8'

services:
  backend:
    build:
      context: ./backend
    container_name: portfolio-backend-dev
    ports:
      - "5000:5000"
    volumes:
      - ./backend:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
    command: npm run dev

  frontend:
    build:
      context: ./frontend
      target: build
    container_name: portfolio-frontend-dev
    ports:
      - "3000:3000"
    volumes:
      - ./frontend:/app
      - /app/node_modules
    environment:
      - CHOKIDAR_USEPOLLING=true
    command: npm start
```

Run with:
```bash
docker-compose -f docker-compose.dev.yml up
```

## Troubleshooting

### Port Already in Use

If you get a "port already in use" error:

```bash
# Check what's using the port
netstat -ano | findstr :3000
netstat -ano | findstr :5000

# Kill the process or change ports in docker-compose.yml
```

### Container Won't Start

```bash
# Check container status
docker ps -a

# View container logs
docker logs portfolio-frontend
docker logs portfolio-backend

# Remove and rebuild
docker-compose down
docker-compose up --build --force-recreate
```

### Clear Everything and Start Fresh

```bash
# Stop all containers
docker-compose down

# Remove all containers, networks, and volumes
docker-compose down -v --remove-orphans

# Remove images
docker rmi portfolio-frontend portfolio-backend

# Rebuild and start
docker-compose up --build
```

## Production Deployment

The Docker configuration is production-ready and includes:

- Multi-stage builds for optimized image sizes
- Nginx for serving the React frontend
- Health checks for the backend
- Proper networking between services
- Restart policies for reliability

For production deployment:

1. Set up a `.env` file for environment variables
2. Use a reverse proxy (like Traefik or nginx) for SSL/TLS
3. Consider using Docker Swarm or Kubernetes for orchestration
4. Set up proper logging and monitoring

## Architecture

```
┌─────────────────┐
│   Frontend      │
│  (localhost:3000)│
│   React + Nginx │
└────────┬────────┘
         │
         │ /api/* requests
         │
         ▼
┌─────────────────┐
│   Backend       │
│  (localhost:5000)│
│   Express API   │
└─────────────────┘
```

The frontend nginx server proxies all `/api` requests to the backend container, enabling seamless communication between services.

## Useful Docker Commands

```bash
# View running containers
docker ps

# View all containers (including stopped)
docker ps -a

# View images
docker images

# Remove unused containers, networks, images
docker system prune -a

# Enter a running container
docker exec -it portfolio-backend sh
docker exec -it portfolio-frontend sh

# View container resource usage
docker stats
```

## Next Steps

- Configure environment variables for sensitive data
- Set up CI/CD pipeline for automated builds
- Add database service if needed
- Implement proper logging solution
- Add monitoring and alerts

