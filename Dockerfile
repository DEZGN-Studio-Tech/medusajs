FROM node:22-bullseye-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update \
    && apt-get install -y python3 build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the application
RUN yarn build

# Set environment variables
ENV NODE_ENV production
ENV PORT 9000

# Expose port
EXPOSE 9000

# Create a startup script
RUN echo "#!/bin/sh\nnpx medusa db:migrate\nyarn start" > start.sh
RUN chmod +x start.sh

# Start the application with migrations
CMD ["./start.sh"]