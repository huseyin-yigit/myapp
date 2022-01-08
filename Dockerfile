FROM node:14 AS base 
COPY . .
RUN yarn install
RUN yarn build 

FROM nginx
WORKDIR myapp
COPY from=base /build /usr/share/nginx/html
