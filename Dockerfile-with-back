
# Essa porta, em EXPOSE, é a padrão, mas poderia ser modificado, por  definir numa variavel PORT -- como feito na linha 12, por exemplo.

FROM node:lts-buster

WORKDIR /myapp

COPY package*.json ./

RUN npm install

COPY . .

ENV REACT_APP_API_HOST games-store-back
ENV REACT_APP_API_PORT 3001

EXPOSE 3000

ENTRYPOINT ["./start.sh"]
