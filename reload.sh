# docker rm container and image
docker rm -f prisma-expressjs
docker rmi prisma-app

# build and run the container
docker build -t prisma-app .
docker run -d -p 3000:3000 --name prisma-expressjs prisma-app