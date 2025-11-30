# ----------------------------
# build from source
# ----------------------------
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .
RUN npm run build -- --configuration production

# ----------------------------
# run with nginx
# ----------------------------
FROM nginx

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY --from=build /app/dist/ui-toolkit-example/browser /usr/share/nginx/html

EXPOSE 80

# Example to rum without docker compose
# docker build -t ui-toolkit-example-spa .
# docker run -d -p 8080:80 ui-toolkit-example-spa
