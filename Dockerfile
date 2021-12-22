FROM node:14
WORKDIR myapp 
COPY . .
RUN yarn install
CMD ["yarn", "start"]
