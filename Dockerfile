FROM node:14

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 8888

CMD ["node", "app.js"]
