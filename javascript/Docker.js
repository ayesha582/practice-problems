/**
 * Docker container is the running instance of Docker Image
 * Docker Image is the template for creating the environment of the app that we want to run.
 * Image consists of OS, software / dependencies, code.
 * Images are created using dockerfile i.e. a text file containing list of commands that tells what steps should be taken.
 * like - install dependencies, copy files, codes etc.
 * ** */


/******************                          /******************                        /*****************
 *                *                           *                *                        *                *
 *  Docker file   * ------ Build ----->>>>    *     Image      * ------ Run ----->>>>   *   Container    *
 *                * ------ Build ----->>>>    *                * ------ Run ----->>>>   *                *
 * ************** *                           * ************** *                        * ************** *



 FROM keyword downloads the base image from the docker registry
 COPY copies your code to the directory/fs of the image
 EXPOSE tells the docker to listen on specified port


 1. Command for building the docker image - docker build -t <docker-image-name> .
    // where . is the directiry where dockerfile is present i.e. current
 2. Command for running the docker image - docker run -p 80:80 <docker-image-name>
    // where the 80 on the left is the port of the host machine and on the right is of the container
    // request is forwarded from host machine's port of 80 to docker container's 80

    There is a special command -v also known as volumes by which you don't need to rebuild again and again
    docker container will directly lookup from your directory itself

    docker run -p 3000:80 -v /Users/prem/Desktop:/var/www/html/ <docker-image-name>
 3. Docker stop <docker-container-name>


 ***/
