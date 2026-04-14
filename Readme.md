# Dependencies
=> npm i @prisma/adapter-pg @prisma/client dotenv express pg router

# Dev Dependencies
=> npm i @types/pg nodemon prisma -D

# Prisma init
npx prisma init

# Prisma migration
npx prisma migrate dev --name ... (Any) or npx prisma migrate dev (All migrations)

# Prisma generate
npx prisma generate

# Reset migration of Prisma
npx prisma migrate reset

# Running
npm start