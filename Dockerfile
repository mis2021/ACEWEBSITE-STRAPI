FROM node:16.13.0-alpine
WORKDIR /usr/src/app/website/strapi
COPY . .


RUN yarn
RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]