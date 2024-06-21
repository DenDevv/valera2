FROM nginx:alpine

RUN rm -rf /etc/nginx/conf.d/*

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY ./cert.crt /etc/nginx/ssl/
COPY ./cert.key /etc/nginx/ssl/
