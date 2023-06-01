FROM node:latest

WORKDIR /var/www

COPY ./nestker/package.json ./nestker/package-lock.json ./

RUN npm install

COPY ./nestker ./

