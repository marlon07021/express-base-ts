FROM node:10.15.3

ENV NODE_ENV="production"
ENV NODE_PORT=3000

RUN mkdir -p /opt/project/logs

WORKDIR /opt/project
COPY . /opt/project
RUN yarn install
COPY . /opt/project
EXPOSE 3000
CMD ["npm", "start"]
