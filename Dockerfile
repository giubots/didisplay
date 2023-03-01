FROM node:16-alpine
WORKDIR /home/node/app
COPY . /home/node/app
RUN npm install

RUN npm run generate

# Deploy section
FROM nginx:1.16.1
WORKDIR /usr/share/nginx/html
COPY --from=0 /home/node/app/dist .
