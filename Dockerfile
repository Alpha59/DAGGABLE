FROM node:0.12
MAINTAINER Alpha59

# Prepare app directory
RUN mkdir -p /usr/src/app

VOLUME "/usr/src/app"

ENV PORT=8002

RUN groupadd -g 501 urbndag \
    && useradd -s /sbin/nologin -u 501 -g urbndag urbndag \
    && mkdir /var/log/urbndag \
    && chmod 777 /var/log/urbndag \
    && chmod 777 /usr/src/app

COPY source/ /usr/src/app

# Install dependencies
WORKDIR /usr/src/app

RUN apt-get update \
    && apt-get install -y --no-install-recommends apt-utils

RUN npm install -g n \
    && n 6.11.3 \
    && rm -rf ./node_modules/* \
    && rm -f /var/log/*.log /var/log/*log /var/log/*.syslog

RUN npm install -g webpack create-react-app babel-cli nodemon

# Map Volume
VOLUME "/var/log/urbndag"

WORKDIR /usr/src/app

RUN npm install --no-optional

RUN rm -rf node_modules/graphql-tools/node_modules/@types/graphql && rm -rf node_modules/apollo-*/node_modules/graphql && rm -rf node_modules/graphql-tools/node_modules/@types/graphql && rm -rf node_modules/@types/graphql

#RUN npm run build

EXPOSE 8002

# Start the app
#&& npm run graph-1
ENTRYPOINT npm install --no-optional && npm run start
