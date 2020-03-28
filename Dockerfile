FROM node:10-slim AS builder
WORKDIR /usr/src/app
COPY package* /usr/src/app/
RUN npm install
COPY . /usr/src/app
RUN npm run gulp
RUN npm prune --production

FROM node:10-slim
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist
EXPOSE 3000
CMD ["node", "./dist/server/main.js"]
