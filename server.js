// const http = require('http');
// const express = require('express');
// const MessagingResponse = require('twilio').twiml.MessagingResponse;
// const config = require('./config');
// const app = express();
//
// app.post('/sms', (req,res) => {
//   const twiml = new MessagingResponse();
//   twiml.message('thanks for the msg homie. hit you back in a few ');
//   res.writeHead(200, {'Content-Type': 'text/xml'});
//   res.end(twiml.toString());
// });
//
// let server = http.createServer(app);
//
// server.listen(config.port, () => {
//   console.log('Express server listening on port' + config.port);
// });
