# Backend Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application files
COPY . .

# Expose the port
EXPOSE 5000

# Set environment variables
ENV PORT=5000
ENV NODE_ENV=production

# Start the server
CMD ["npm", "start"]

