FROM node:20-slim

# set env variables for pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# corepack includes pnpm
RUN corepack enable

# set working directory
WORKDIR /app

# copy package.json and package-lock.json to working directory
COPY package.json pnpm-lock.yaml ./

# install dependencies using pnpm
RUN pnpm install

# install serve globally
RUN pnpm install -g serve

COPY . .

# build web app
RUN pnpm run build

