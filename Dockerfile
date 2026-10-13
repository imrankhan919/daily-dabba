# Build frontend
FROM node:20-alpine AS frontend-build

WORKDIR /app/client

COPY client/package*.json ./
RUN npm install --legacy-peer-deps

COPY client/ ./
RUN npm run build

# Build backend
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY server/ ./server/

COPY --from=frontend-build /app/client/dist ./client/dist

ENV NODE_ENV=production
ENV PORT=5000

EXPOSE 5000

CMD ["node", "server/server.js"]