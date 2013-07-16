Ext.define('CP.view.login.login',{
			extend:'Ext.form.Panel',
			alias:'widget.loginview',
			title:'Login',
			width:400,
            height: 150,
			frame:'true',
			draggable:true,
			
			items:[
				{
				xtype:'textfield',
				fieldLabel:'Username',
				itemId: 'username', 
				allowblank: false,
				height: 30,
				},
				{
				 xtype: 'textfield',
				 fieldLabel: 'password',
				 name: 'password', 
				 itemId: 'password', 
				 allowblank: false, 
				 inputType: 'password',	
				 height: 30,
				}
			],
			buttons:[{
			text:'Sign In',
			action:'connect',
				/*listeners :{ 
					click: function(){ 
						var username = this.up('form').down('#username').getValue(); 
						var password = this.up('form').down('#password').getValue(); 
						alert(username+"   "+password);
					} 
				}*/
			
			}]
	
	});
