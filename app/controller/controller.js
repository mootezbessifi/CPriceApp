Ext.define('CP.controller.controller', {
    extend: 'Ext.app.Controller',
	
	views:['login.login','login.LearnMore'],
	 
	 init: function() {
        this.control({
            'loginview button[action=connect]': {
                click: this.actionLogin
            }
            
        });
    },
    actionLogin: function(button) {

        //here goes the code of the button's handler

        //var username = up('form').down('#username').getValue();
		//var password = up('form').down('#password').getValue();
    }

});
