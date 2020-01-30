FROM node:13.7.0-alpine3.10 AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM alpine:latest
VOLUME built_output
COPY --from=builder /usr/src/app/dist/blockchain-explorer-frontend built_output/
