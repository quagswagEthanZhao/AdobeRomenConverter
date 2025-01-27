# Use official Node.js image as a parent image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code into the container
COPY . .

# Build the React app for production
RUN npm run build

# Serve the app using a simple static server
RUN npm install -g serve

# Expose the port that the app will run on
EXPOSE 3000

# Command to start the server and serve the built app
CMD ["serve", "-s", "build", "-l", "3000"]
