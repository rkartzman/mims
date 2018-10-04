const pages = require('./pages');
const message = require('./message');
var TokenService = require('../services/tokenService');
// Map routes to controller functions
module.exports = function(app) {
    // Twilio SMS webhook route
    app.post('/message', message.webhook);

    // Render a page that will allow an administrator to send out a message
    // to all subscribers
    app.get('/', pages.showForm);

    // Handle form submission and send messages to subscribers
    app.post('/message/send', message.sendMessages);

    app.get('/messages', pages.showMessagePage)

    // POST /token
    app.post('/token', function(req, res) {
      var deviceId = req.body.device;
      var identity = req.body.identity;
      var token = TokenService.generate(identity, deviceId)
      console.log('token service___________');
      console.log(TokenService)

      res.json({
        identity: identity,
        token: token.toJwt(),
      });
    });
}
