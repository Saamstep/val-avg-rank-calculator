FROM node:14

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

CMD ["node", "app.js"]