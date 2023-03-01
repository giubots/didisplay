FROM node:16-alpine
WORKDIR /home/node/app
COPY . /home/node/app
RUN npm install
RUN npm run build
CMD ["node .output/server/index.mjs"]
