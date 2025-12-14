## dependencies
FROM node:lts-alpine as deps
WORKDIR /app
COPY package.json package-lock.json tsconfig.json ./
RUN npm install

FROM deps as dev
WORKDIR /app
EXPOSE 3000
COPY . .
CMD ["npm", "run", "start:dev"]
