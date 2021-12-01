FROM node:16-alpine

WORKDIR /code

ADD . /code
RUN yarn

EXPOSE 3000

CMD npm start
