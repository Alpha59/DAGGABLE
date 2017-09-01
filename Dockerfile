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
    && apt-get install -y --no-install-recommends apt-utils \
    && apt-get install -y vim

RUN npm install -g n \
    && n 8.4.0 \
    && rm -rf ./node_modules/* \
    && rm -f /var/log/*.log /var/log/*log /var/log/*.syslog \
    && npm install -g nodemon \
    && npm install -g webpack create-react-app

# Map Volume
VOLUME "/var/log/urbndag"

EXPOSE 8002

RUN npm install

#RUN npm run build

# Start the app
ENTRYPOINT npm install --no-optional && npm run start
