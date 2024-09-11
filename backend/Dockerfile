# Use the official Node.js image as the base image
FROM node:20-alpine

# Set environment variables for pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Enable corepack (includes pnpm)
RUN corepack enable

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml for dependency installation
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Install TypeScript globally
RUN pnpm add -g typescript

# Build the TypeScript app
RUN pnpm run build

# Expose the port on which the application will run
EXPOSE 3000

# Start the compiled JavaScript application
CMD ["node", "dist/index.js"]
