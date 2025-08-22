FROM node:18-alpine

WORKDIR /usr/src/app

# Install build tools for npm packages
RUN apk add --no-cache bash python3 make g++

# Copy package files
COPY package*.json ./

# Install backend dependencies
RUN npm install --legacy-peer-deps

# Copy everything
COPY . .

# Install and build frontend
WORKDIR /usr/src/app/client
RUN npm install --legacy-peer-deps && npm run build

# Back to root
WORKDIR /usr/src/app

# Remove unnecessary node_modules in client
RUN rm -rf client/node_modules

EXPOSE 5000

ENV NODE_ENV=production

CMD ["node", "server/server.js"]
