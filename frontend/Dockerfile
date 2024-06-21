FROM node:21-alpine
WORKDIR /frontend/

COPY ./package.json .

RUN npm i

COPY . .

CMD ["npm", "start" ]