# Use the official node.js image as the base image
FROM node:18

# Set the working directory in the container to /app
WORKDIR /usr/src/app

# Copy the package.json file into the container at /app
COPY package*.json ./

# Install all dependencies
RUN npm ci


# Copy the current directory contents into the container at /app
COPY . .

# Build the app
RUN npm run build


# Install serve to run the static files
RUN npm install -g serve


# Set the enviromental variable to be used by serve
ENV REACT_APP_API_URL=http://localhost:5000


# Make port 3000 available to the world outside this container
EXPOSE 3000


# Run the app when the container launches
CMD ["serve", "-s", "build", "-l", "3000"]
