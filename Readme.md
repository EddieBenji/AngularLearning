Hi everyone. This project is for learning and contains a connection between angular 2, node, express and mongo. The goal is to show
a chat-room with your self, where every message is saved in mongo and then retrieved from it in order to render them in the view.

# What you need to install !

1. Clone (or download) this repo.
2. Download Mongo. Go to [Mongo's homepage](https://www.mongodb.com/ "Mongo's Homepage") and download the package. Once done that,
move the package to a folder where you can access.
    * Add the route of the folder to your path. Example:
        * ![Path to mongo](https://github.com/EddieBenji/AngularLearning/blob/master/markdown/images/MONGO_PATH.png "Path to mongo")
    * Start mongo by typing *mongo* in your console.
        * In addition, you can start the mongo client like this: *mongod* (this allows you to access all your databases and
        perform queries).
3. Go to  [Node's homepage](https://nodejs.org/en/ "Node's Homepage") and download the **CURRENT** version of Node.
    * Once you've download node, go to the root folder of this project. Then hit: *npm install*
    * If you have troubles with webstartserver and del-cli packages, try to install these 2 globally (-g option)
4. Go to the root folder of this project, then:
    * Run *npm run build* to run the development build script => Keep this process running! It recompiles your files upon changes.
    * Run *npm start* in a new command line/ terminal window => Keep this process running as well, it's your NodeJS server.