Ext.require('Ext.sb.StatusBar');
var status = Ext.create('Ext.Panel', {
		bbar: Ext.create('Ext.sb.StatusBar', {
        
        id: 'form-statusbar',
        defaultText: '<font color = "green"><b>Ready<b></font>'
        })
});

var log = Ext.define('CP.view.login.login',{
			extend:'Ext.form.Panel',
			alias:'widget.loginview',
			require:['Ext.sb.StatusBar'],
			id:'loginForm',
			title:'Login',
			width:300,
            autoHeight: true,
			//add a css class to hide the form by default. Here we cannot use "hidden:true", because we lose the box style after.
			cls:'hideForm',
			frame:'true',
			items:[
				{
					xtype:'textfield',
					fieldLabel:'Username <span class="req" style="color:red"> * </span> ',
					allowBlank: false,
					margin: '10 20 10 0',
					name:'username',
					itemId: 'username',
					blankText:"Username Required !", 
					
				},{
					 xtype: 'textfield',
					 fieldLabel: 'Password <span class="req" style="color:red"> * </span>',
					 allowBlank: false,
					 margin: '0 30 10 0',
					 name: 'password', 
					 itemId: 'password', 
					 inputType: 'password',
					 //vtypeText:"exple@mail.fr",
					 blankText:"Password Required !"	 
				},{
					xtype:'checkbox',
					boxLabel : 'Remember me',
					fieldLabel: '',
					margin: '10 20 0 0',
					checked: true,
					style: 'right:-104px;position:relative;',
					id: 'save'
				},{
					xtype:'button',
					text:'<font size= "2" color ="black" >Password Forgotten</font>',
					border:false,
					margin:'20 20 10 90',
					cls:'x-transparent',
					handler:function(){
						var view = Ext.widget('passForgot');
					}
				},{
					xtype: 'hidden',        
					id: 'connexion',
					name: 'connexion'
				},
				status
				],
			listeners:{
					//sliding the login form up when rendering it. The same thing is possible with 'afterrender' event
					'render': function(){
						Ext.get('logview').slideOut();
					}
			},
			buttons:[{
				text:'<center>Sign In</center>',
				action:'connect',
				id:'signin',
				margin: '5 5 5 5',	
				
			}]
	});
	
