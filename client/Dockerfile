FROM node:alpine as builder

WORKDIR '/app'
COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run build

# second layer(phase) to create instance of nginx to host production files
FROM nginx
EXPOSE 3000
# copy of nginx defalut.conf file
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# /app/build - default location for the build option of nginx
COPY --from=builder /app/build /usr/share/nginx/html
