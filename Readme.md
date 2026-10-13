# Daily Dabba 🍱

A full-stack food and meal management application built with React, Node.js, Express, and MongoDB. The project supports Docker-based deployment, with the React frontend and Express backend served through a single port.

## ✨ Tech Stack

- **Frontend:** React.js, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Deployment:** Docker, Docker Compose
- **Environment Configuration:** dotenv

## 📁 Project Structure

```text
daily-dabba/
├── client/                  # React frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── server/                  # Express backend
│   ├── config/
│   │   └── dbConfig.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── adminRoutes.js
│   │   ├── mealRoute.js
│   │   ├── orderRoutes.js
│   │   └── ratingsRoutes.js
│   └── server.js
├── Dockerfile
├── docker-compose.yml
├── .env
├── .dockerignore
└── README.md
```

## ⚙️ Prerequisites

Before running the application, install:

- [Git](https://git-scm.com/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

Make sure Docker Desktop is running before executing Docker commands.

## 🚀 Getting Started with Docker

### 1. Clone the repository

```bash
git clone https://github.com/imrankhan919/daily-dabba.git
cd daily-dabba
```

### 2. Configure environment variables

Create a `.env` file in the project root, alongside `docker-compose.yml`.

```dotenv
NODE_ENV=production
PORT=5000

MONGO_ROOT_USERNAME=admin
MONGO_ROOT_PASSWORD=replace_with_a_strong_password

MONGO_URI=mongodb://admin:replace_with_a_strong_password@mongodb:27017/daily-dabba?authSource=admin
```

**Important:**

- Replace the example password with a strong password.
- Use the same password in `MONGO_ROOT_PASSWORD` and `MONGO_URI`.
- URL-encode special characters in the password when placing it inside the MongoDB URI.
- Never commit `.env` to Git.

### 3. Build and start the application

Run the following command from the project root:

```bash
docker compose up --build -d
```

Docker Compose will:

1. Build the React frontend.
2. Build the Node.js and Express backend.
3. Start the MongoDB container.
4. Wait for MongoDB's health check before starting the application.
5. Serve the frontend and API through the Express server on port `5000`.

### 4. Open the application

Once the containers are running, visit:

**Application:** http://localhost:5000

The React frontend and backend API share the same port.

## 🐳 Docker Commands

### Start containers

```bash
docker compose up -d
```

### Rebuild after code changes

```bash
docker compose up --build -d
```

### Check container status

```bash
docker compose ps
```

### View application logs

```bash
docker compose logs -f daily-dabba
```

### View MongoDB logs

```bash
docker compose logs -f mongodb
```

### Stop containers

```bash
docker compose down
```

### Stop containers and delete database data

```bash
docker compose down -v
```

**Warning:** The last command deletes the named MongoDB volume and its persisted data. Use it only when you intentionally want to reset the database.

## 🗄️ MongoDB Configuration

MongoDB runs in its own Docker container.

| Setting                 | Value                 |
| ----------------------- | --------------------- |
| Docker service          | `mongodb`             |
| Container name          | `daily-dabba-mongodb` |
| Internal port           | `27017`               |
| Database                | `daily-dabba`         |
| Authentication database | `admin`               |
| Persistent volume       | `mongodb_data`        |

The backend connects to MongoDB using the service hostname `mongodb`, not `localhost`.

Example connection string:

```text
mongodb://admin:YOUR_PASSWORD@mongodb:27017/daily-dabba?authSource=admin
```

The `mongodb_data` volume preserves database data when containers are stopped or recreated.

MongoDB port `27017` is not exposed to the host by default. You can add a port mapping if you need to connect from MongoDB Compass.

## 🔌 API Endpoints

The following API route prefixes are registered in the Express server.

| Feature        | Endpoint prefix |
| -------------- | --------------- |
| Authentication | `/api/auth`     |
| Administration | `/api/admin`    |
| Meals          | `/api/meal`     |
| Orders         | `/api/order`    |
| Ratings        | `/api/rating`   |

The HTTP methods and individual endpoints depend on the route definitions in `server/routes/`.

Example API URL:

```text
http://localhost:5000/api/auth
```

## 🛠️ Frontend and Backend Configuration

In production, Express serves the compiled React application from:

```text
client/dist/
```

The frontend is built during the Docker image build process. Express then serves the generated HTML, JavaScript, CSS, and other static assets.

React Router routes should fall back to `index.html`, while unknown `/api/` endpoints should remain API responses rather than returning the frontend HTML.

### API request URLs

Because the frontend and backend share the same origin, prefer relative API URLs:

```javascript
const response = await fetch("/api/auth/login");
```

Avoid hardcoding `http://localhost:5000` in production API requests. Relative URLs also work when the application is accessed through another hostname.

## 🧑‍💻 Running Locally Without Docker

For frontend or backend development, you can run the services directly with Node.js while MongoDB runs separately.

### 1. Start MongoDB

Start a local MongoDB server or use the MongoDB container from Docker Compose.

If using Docker Compose, ensure MongoDB is running:

```bash
docker compose up -d mongodb
```

### 2. Install backend dependencies

From the project root:

```bash
npm install
```

### 3. Install frontend dependencies

```bash
cd client
npm install
```

### 4. Build the frontend

```bash
npm run build
```

### 5. Start the backend

Return to the project root and run the backend entry point:

```bash
node server/server.js
```

For local production-style testing, configure the backend environment with `NODE_ENV=production` and `PORT=5000

Sample .env :
NODE_ENV=production
PORT=5000
MONGO_ROOT_USERNAME=admin
MONGO_ROOT_PASSWORD=change_this_to_a_strong_password
MONGO_URI=mongodb://admin:change_this_to_a_strong_password@mongodb:27017/daily-dabba?authSource=admin
