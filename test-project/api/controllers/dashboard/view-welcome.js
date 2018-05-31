module.exports = {


  friendlyName: 'View welcome page',


  description: 'Display the dashboard "Welcome" page.',

 
  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/welcome',
      description: 'Display the welcome page for authenticated users.'
    },

  },


  fn: async function (inputs, exits) {
    if(this.req.me){
      var user = await User.findOne({id:this.req.session.userId});
      var hobbies = await Hobby.find({u_mail:this.req.session.userId});
      return exits.success({name:user.u_fullname,myhobby:hobbies});
    }
   var user = await User.findOne({id:this.req.session.userId});
   var hobbies = await Hobby.find({u_mail:this.req.session.userId});
   return exits.success({name:user.u_fullname,myhobby:hobbies});
    //return exits.success();
  }


};
