module.exports = {


    friendlyName: 'welcome',
  
  
    description: 'Welcome page that displays the user#s fullname and hobbies, it also includes a textbox that allows users to add to their hobby list after which it sends an email and sms',
  
  
    extendedDescription:
  `A post method is used to submit the hobby tp the hobby list, the SMS service calls the twilio create method from the twilio API which is used to send messages to a phone number(myphone number) and the Mailer service calls the mailgun send method which is used to send email to my personal email for test purposes`,
  
  
    inputs: {
  
      hobby: {
        description: 'The hobby the user wants to store.',
        type: 'string',
        required: true,
        
      },
  
    
  
    },
  
  
    exits: {
  
      success: {
        description: 'The page is successfully displayed',
        extendedDescription:
  `The page is successfully displayed with the username and hobbies displayed and all messages and emails are delivered`
      },
  
     
  
    },
  
  
    fn: async function (inputs, exits) {
      //stores the user's hobby
        var newHobbyRecord = await Hobby.create(Object.assign({
            u_mail: this.req.session.userId,
            h_content: inputs.hobby
         
          }
        ));

      

        //calls the service to send the sms
      SMS.sendMessage(inputs.hobby);
        
      //calls the service to send the email
          Mailer.sendWelcomeMail(inputs.hobby);  
          
      
      return exits.success();
  
    }
  
  };
  