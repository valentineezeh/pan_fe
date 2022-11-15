FROM --platform=linux/amd64 node:14.17.0-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
EXPOSE 4000
COPY . /app
ENTRYPOINT ["npm", "start"]