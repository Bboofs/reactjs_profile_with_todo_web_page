# following this tutorial:
# https://mherman.org/blog/dockerizing-a-react-app/

# Below is a prod build

# base image
FROM node:10.16.3-alpine

# set a working directory
WORKDIR /app/Tutes/JS/react/todo_with_profile

# add `/app/Tutes/JS/react/todo_with_profile/node_modules/.bin` to $PATH
ENV PATH /app/Tutes/JS/react/todo_with_profile/node_modules/.bin:$PATH

# install and cache up dependencies
#COPY package.json /app/Tutes/JS/react/todo_with_profile/package.json
COPY . /app/Tutes/JS/react/todo_with_profile
RUN npm install
RUN npm install -g react-scripts
RUN npm install -g serve
RUN npm run build
# start app
CMD ["serve", "-p", "8484", "-s", "build"]

#docker run -v ${PWD}:/app/Tutes/JS/react/todo_with_profile -v /app/Tutes/JS/react/todo_with_profile/node_modules -p 3001:3000 --rm sample:dev

# docker run -v %cd%:/app/Tutes/JS/react/todo_with_profile -v /app/Tutes/JS/react/todo_with_profile/node_modules -p 6969:6969 --rm loogs/node_react:profile_and_todo
