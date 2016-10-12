# This image will be based on the official nodejs docker image
FROM node:latest
 
# Set in what directory commands will run
WORKDIR /rest3
 
# Put all our code inside that directory that lives in the container
ADD . /rest3
 
# Install dependencies
RUN npm install && \
npm install -g bower && \
bower install --allow-root
 
# Tell Docker we are going to use this port
EXPOSE 5000
 
# The command to run our app when the container is run
CMD ["npm", "start"]
