# Stage 1: Build
FROM node:18-alpine AS build

WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Copy package files and install dependencies
COPY package.json package-lock.json* ./

# Install dependencies only (without dev dependencies)
RUN npm ci --omit=dev && npm cache clean --force

# Copy all application files for build
COPY . .

# Build the project (if there's a build process)
RUN npm run build

# Stage 2: Production
FROM node:18-alpine AS production

WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Copy built files and required dependencies from build stage
COPY --from=build /app /app

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "docker-start"]
