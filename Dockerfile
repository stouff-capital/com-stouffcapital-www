FROM nginx

COPY ./*.png /usr/share/nginx/html/
COPY ./*.ico /usr/share/nginx/html/

COPY ./manifest.json /usr/share/nginx/html/
COPY ./index.css /usr/share/nginx/html/
#COPY ./main.js /usr/share/nginx/html/
COPY ./index.html /usr/share/nginx/html/
