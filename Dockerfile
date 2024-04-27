# Use a specific LTS version of the Node.js image
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

RUN npm run build

# Start the Next.js app
CMD ["npm", "start"]
