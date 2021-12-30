FROM node:alpine

RUN mkdir -p /usr/src/app/node_modules/.cache
RUN chmod -R 777 /usr/src/app

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]