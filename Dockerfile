FROM node:22-alpine

# Set the working directory
WORKDIR /app

# 1. Copy package files
COPY package.json package-lock.json ./

# 2. Install deps
RUN npm install

# 3. Copy ONLY prisma schema first
COPY prisma ./prisma

# 4. Generate Prisma client
RUN npx prisma generate

# 5. Copy the rest of your app
COPY . .

EXPOSE 3000

CMD ["npm", "start"]