# Use the official Node.js image
# https://hub.docker.com/_/node
FROM node:18

# Create and change to the app directory.
WORKDIR /usr/src/app


# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN npm install


# Copy local code to the container image.
COPY . .

# Set the PORT environment variable
ENV PORT 5000


# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE $PORT


# Run the web service on container startup.
CMD [ "node", "index.ts" ]