# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Copy pnpm-lock to working directory
COPY pnpn-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN pnpm run build

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to start the app
CMD ["pnpm", "start"]
