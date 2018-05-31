// api/services/Mailer.js
module.exports.sendWelcomeMail = function(a ) {
    sails.hooks.email.send(
    'welcomeEmail', 
    {
    Name: a
    },
    {
    to: 'tpharell22@gmail.com',
    subject: 'Hobby: '+a
    },
    function(err) {console.log(err || 'Mail Sent!');}
    )
   }