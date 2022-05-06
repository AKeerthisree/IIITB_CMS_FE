### STAGE 1: Build ###
FROM node:16.14.2-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN rm -rf node_modules
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/iiitb-cms-fe /usr/share/nginx/html