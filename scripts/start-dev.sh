#!/bin/bash

# Start Docker containers
docker-compose up -d

# Run Prisma migrations
npx prisma migrate dev

# Start Next.js development server
npm run dev