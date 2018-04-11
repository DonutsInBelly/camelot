# HackRU-Application
Viewable demo: http://hackru.carlinau.me/  

### Pre-Requisites
- Node.js v6+
- npm v3+
- MongoDB v3.3+
- Redis v4+

### Steps to set up:
- Get [Node.js and npm](https://nodejs.org/en/download/package-manager/)
- Get MongoDB
  - We currently use [MLab](https://mlab.com/)
  - Actual instructions [here](https://docs.mongodb.com/manual/installation/)
- Get [Redis](https://redis.io/download)
  - [Digital Ocean Flavored Instructions](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-redis)
- Git Clone this Repo to your working directory
  - `git clone https://github.com/dominusbelli/camelot.git`
- Go into the Repo directory and Install all dependencies
  - `npm install`
- Launch the server
  - Listens on Port 8080 if no environment variable is assigned
- Use this guide below for production ready techniques: https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-14-04#set-up-reverse-proxy-server

### Testing
Performance testing is done through [Locust.io]()

### Contributors
- @dominusbelli
- @davidchen
- @jandeancatarata
