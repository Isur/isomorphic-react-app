FROM node:lts-alpine
COPY package*.json /usr/src/app/
WORKDIR /usr/src/app
RUN npm install
COPY . .
ENV NODE_ENV production
ENV DATABASE_HOST localhost
ENV DATABASE_NAME boilerplate
ENV DATABASE_PASSWORD boilerplate
ENV DATABASE_USER boilerplate
ENV DATABASE_PORT 5433
RUN npm run dockerbuild
EXPOSE 3000
CMD ["npm", "start"]
