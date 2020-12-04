FROM node:10.15.3

ENV NODE_ENV="production"
ENV NODE_PORT=3000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install
COPY ./src ./src
RUN npm run build

FROM node:10.15.3

ENV NODE_ENV="production"
ENV NODE_PORT=3000

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --only=production
COPY --from=0 /usr/src/app/dist ./dist

EXPOSE 3000
CMD npm start
