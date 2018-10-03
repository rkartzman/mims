const http = require('http');
const mongoose = require('mongoose');
const config = require('./config');


// Initialize database connection - throws if database connection can't be
// established
mongoose.connect(config.mongoUrl,{
   useMongoClient: true
});
// mongoose.connect(config.mongoUrl);
mongoose.Promise = Promise;
mongoose.connection.on('connected', function(){ console.log('connected')});
// mongoose.connection.on('connected', function () {
//     mongoose.connection.db.collectionNames(function (err, names) {
//         if (err) console.log(err);
//         else console.log(names);
//     });
// })
// mongoose.connection.on('error', function(){ console.log('error connecting')});
mongoose.set('bufferCommands', false);

// Create Express web app
const app = require('./webapp');

// Create an HTTP server and listen on the configured port
const server = http.createServer(app);
server.listen(config.port, function() {
    console.log('Express server listening on *:' + config.port);
});
