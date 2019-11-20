FROM node:10-slim AS builder
WORKDIR /usr/src/app
COPY package* /usr/src/app/
RUN npm install --registry=https://registry.npm.taobao.org
COPY . /usr/src/app
RUN npm run gulp
RUN npm prune --production

FROM node:10-slim
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/config ./config
EXPOSE 3000
CMD ["node", "./dist/server/main.js"]
