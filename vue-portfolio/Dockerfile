# Create the image based on the official Node 8.9.0 image from Dockerhub
FROM node:latest

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app

WORKDIR /usr/src/app
ADD . /usr/src/app

RUN npm run build
RUN rm -rf ./build
RUN rm -rf ./src

ENV PORT=8081

CMD npm start