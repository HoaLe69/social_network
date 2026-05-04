#stage 1: build source
FROM node:18 AS builder

WORKDIR /app

# Copy only package files first (better layer caching)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && npm install --only=dev

# Copy source code
COPY . .

# Build the React app
RUN npm run build

#stage 2
FROM nginx:alpine 

WORKDIR /app

# NginX config for SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built React app to nginx
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 



