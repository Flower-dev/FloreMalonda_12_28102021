### Front-end

This repo contains all the source code to run the micro front for the sports analytics dashboard SportSee.

 **Starting the project**

- The `docker image build --no-cache -t micro-front .` command allows you to build your image.
- The `docker container run --name micro-front  -v "`pwd`/src:/app/src"  -v "`pwd`/public:/app/public" -p 3000:3000 -dt micro-front` command allows you to create your Docker container and run your image on port 3000 & create different volumes.
- The `docker container stop micro-front` command allows you to stop your micro-front.
- The `docker container rm micro-api` command allows you to delete your micro-front container.
- The `docker container start micro-front` command allows you to start your micro-front.

### Launching the project

- Fork the repository
- Clone it on your computer.


