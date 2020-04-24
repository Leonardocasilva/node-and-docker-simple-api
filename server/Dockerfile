FROM node:10

RUN mkdir -p /home/node/server/node_modules && chown -R node:node /home/node/server

WORKDIR /home/node/server

COPY package*.json ./

RUN npm install

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 8080

CMD [ "src", "app.js" ]