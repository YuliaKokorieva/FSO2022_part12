FROM node:16 AS build-stage
WORKDIR /usr/src/app
COPY . .
ENV NODE_ENV=production
ENV REACT_APP_BACKEND_URL=http://localhost:3001/
RUN npm ci
RUN CI=true npm test
RUN npm run build
RUN npm install -g serve
CMD ["serve", "build"]
