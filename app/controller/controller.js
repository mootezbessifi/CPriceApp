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
        console.log('clicked the Save button');      
        
        //var username = up('form').down('#username').getValue(); 
		//var password = up('form').down('#password').getValue(); 
		alert("bien jouer");
    },

});
