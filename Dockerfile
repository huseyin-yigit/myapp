ROM node:14 AS base-image 
COPY . .
RUN yarn install
RUN yarn build 

FROM nginx
WORKDIR myapp
COPY from = base - image /build /usr/share/nginx/html
