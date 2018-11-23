# Stouff capital website

## setup

`npm install`

### compile SASS

`node_modules\.bin\node-sass-chokidar -w ./index.scss -o ./`


## container

### build container

`docker build -t stouffcapital/com-stouffcapital-www .`

## deployment with kubernetes

1. `kubectl create -f deploy/www.yaml`
1. `kubectl create -f deploy/ing-com-stouffcapital.yaml`
