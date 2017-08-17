FROM node:0.12
MAINTAINER Alpha59

# Prepare app directory
RUN mkdir -p /usr/src/app

COPY source/ /usr/src/app

# Install dependencies
WORKDIR /usr/src/app
RUN npm install
RUN npm install -g n nodemon webpack
RUN n 8.3.0

RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "vim"]

# Expose the app port
EXPOSE 9000

# Start the app
ENTRYPOINT npm run start
