# based off this guide, here:
# https://medium.com/@shakyShane/lets-talk-about-docker-artifacts-27454560384f

# base image
FROM node:8.12.0

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn build

# EXPOSE 80:3000 443:3000
EXPOSE 80:3000
CMD ["yarn", "server"]
