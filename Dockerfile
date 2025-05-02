FROM node:23-slim

RUN apt-get update -y \
&& apt-get install -y openssl

WORKDIR /app

COPY package.json package-lock.json ./

COPY ./build /app/build
COPY ./prisma /app/prisma

RUN mkdir -p /app/node_modules \
    && if [ -d /app/node_modules ] && [ "$(ls -A /app/node_modules)" ]; then \
        echo "node_modules exists, skipping npm install"; \
    else \
        echo "node_modules is empty or missing, running npm ci"; \
        npm ci; \
    fi

CMD ["sh", "-c", "npm run db:deploy && npm run start"]

