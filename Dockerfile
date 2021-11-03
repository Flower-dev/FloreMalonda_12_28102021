# pull official base image
FROM node:latest

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# https://github.com/webpack/webpack/issues/14532#issuecomment-955047245
ENV NODE_OPTIONS=--openssl-legacy-provider
ENV CHOKIDAR_USEPOLLING=true

# install app dependencies
COPY package.json ./
RUN npm install --silent
RUN npm install react-scripts -g --silent
RUN npm install node-sass
RUN npm install recharts
# add app
COPY . ./

# start app
CMD ["npm", "start"]