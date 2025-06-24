# Use the official Node.js image as the base image
FROM node:24-alpine3.21 AS base
WORKDIR /app
COPY ./src ./src
COPY ["package.json", "package-lock.json", "./"]
RUN npm install

# Install dependencies
FROM base AS dev

WORKDIR /app
ENTRYPOINT [ "npm", "run", "start:debug" ]
