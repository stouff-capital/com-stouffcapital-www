# Stouff capital website

## setup

`npm install`

### compile SASS

`node_modules\.bin\node-sass-chokidar -w ./index.scss -o ./`


## container

### build container

`docker build -t gchevalley/stouff-capital-website .`

## deployment with kubernetes

`kubectl run stouff-capital-website --image=gchevalley/stouff-capital-website --port=80`

`kubectl expose deployment stouff-capital-website --type=NodePort`

### ingress with SSL

```
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: ingress-stouff-capital-website
  annotations:
    kubernetes.io/tls-acme: "true"
    kubernetes.io/ingress.class: "nginx"
spec:
  tls:
  - hosts:
    - stouffcapital.com
    secretName: stouffcapital-service-tls
    - www.stouffcapital.com
    secretName: www-stouffcapital-service-tls
  backend:
    serviceName: default-http-backend
    servicePort: 80
  rules:
  - host: stouffcapital.com
    http:
      paths:
      - path: /
        backend:
          serviceName: stouff-capital-website
          servicePort: 80
  - host: www.stouffcapital.com
    http:
      paths:
      - path: /
        backend:
          serviceName: stouff-capital-website
          servicePort: 80
```
