FROM caddy:latest

COPY Caddyfile /etc/caddy/Caddyfile
COPY source /srv

EXPOSE "80:80"
EXPOSE "443:443"
EXPOSE "443:443/udp"

RUN caddy start
