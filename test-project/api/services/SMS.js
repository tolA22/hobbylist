// SDK Version: 2.x 3.x 
//         Download the helper library from https://www.twilio.com/docs/node/install
//         Your Account Sid and Auth Token from twilio.com/console
module.exports.sendMessage = function(a) {
        const accountSid = 'AC0c6d0895770efcedd0d574b39cfd6cd0';
        const authToken = 'e1ab3f4db3abf795f7893b78d7b77644';
        const client = require('twilio')(accountSid, authToken);
        
       return client.messages
          .create({
            body: 'You have successfully added hobby:'+a,
             from: '+14158860523',
             to: '+2347064319492'
           })
          .then(message => console.log(message.sid))
          .done();

          }