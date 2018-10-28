FROM nginx

COPY build /usr/share/nginx/html

COPY .deploy/nginx.conf /etc/nginx/nginx.conf

COPY .deploy/ssl/ca.pem /etc/nginx/ssl/ca.pem
COPY .deploy/ssl/ca.key.pem /etc/nginx/ssl/ca.key.pem

EXPOSE 443

CMD ["nginx"]