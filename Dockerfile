FROM node:12.16.1

RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

COPY . /usr/src/app/
RUN npm install
RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start:prod"]