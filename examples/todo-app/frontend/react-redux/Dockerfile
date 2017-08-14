FROM node

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY . .
RUN npm install -g http-server
RUN npm install
RUN npm run build

# Run http server on port 8080
CMD ["http-server", "./dist", "-s"]
