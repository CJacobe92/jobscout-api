FROM node:23-slim

RUN apt-get update -y \
&& apt-get install -y openssl

WORKDIR /app

COPY package.json package-lock.json ./

COPY ./build /app/build
COPY ./prisma /app/prisma


# RUN npm ci


CMD ["sh", "-c", "npm run db:deploy && npm run start"]

