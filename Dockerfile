# Step 1: Build the application
FROM node:18 AS build

WORKDIR /app

# Copy package.json and pnpm-lock.yaml first to optimize layer caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm && pnpm install

# Copy all the files
COPY . .

# Build the Vite app
RUN pnpm run build

# Step 2: Set up Nginx to serve the application (for production)
FROM nginx:alpine

# Copy the build output from the previous step
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
