# base image
FROM node:8.9.0

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN yarn install
RUN yarn add react-scripts@1.1.1 -g

# start app
CMD ["yarn", "start"]