FROM node:20-slim

# set working directory
WORKDIR /app

# copy package.json and package-lock.json to working directory
COPY package.json .

# install dependencies
RUN npm install

# install serve globally
RUN npm i -g serve

COPY . .

# build web app
RUN npm run build

EXPOSE 3000
# serve requests
CMD [ "serve", "-s", "dist" ]
