# build environment
FROM node:13.12.0-alpine as build

WORKDIR /app

# ENV PATH /app/node_modules/.bin:$PATH
COPY . ./

RUN npm ci --silent && \
    npm install react-scripts@3.4.1 -g --silent && \
    npm run build


# production environment
FROM nginx:stable-alpine

# # Copy custom nginx.conf to the default Nginx configuration location
# COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]