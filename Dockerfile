# Stage 1: Build the app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production=false

# Copy all source code and build
COPY . .
RUN npm run build

# Stage 2: Run the app
FROM node:18-alpine

WORKDIR /app

# Install only 'serve' (for static hosting)
RUN npm install -g serve

# Copy build output from builder stage
COPY --from=builder /app/dist ./dist

EXPOSE 8080
CMD ["serve", "-s", "dist", "-l", "8080"]
