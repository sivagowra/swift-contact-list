#!/bin/bash

# Step 1: Login to Docker Hub
echo "Logging into Docker Hub..."
docker login

# Step 2: Pull the latest image
echo "Pulling the latest image from Docker Hub..."
docker pull sivagowra/contact-app:latest

# Step 3: Stop & remove existing container (if running)
echo "Stopping existing container (if any)..."
docker stop contact-app 2>/dev/null || true
docker rm contact-app 2>/dev/null || true

# Step 4: Run the container
echo "Running the container..."
docker run -d --name contact-app -p 8080:8080 sivagowra/contact-app:latest

# Step 5: Show running containers
echo "Currently running containers:"
docker ps