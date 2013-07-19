Ext.define('CP.view.login.login',{
			extend:'Ext.form.Panel',
			alias:'widget.loginview',
			title:'Login',
			width:300,
            height: 160,
			frame:'true',
			//hiden:true,
			cls: 'round-corners',
			id:'inscrit',
			listeners:{
				'afterrender':function(){
					console.log(this.title);
					}
				
				},
			items:[
				{
				xtype:'textfield',
				fieldLabel:'Username',
				margin: '10 20 10 0',
				name:'username',
				itemId: 'username', 
				allowblank: false,
				},
				{
				 xtype: 'textfield',
				 fieldLabel: 'Password',
				 margin: '0 30 0 0',
				 name: 'password', 
				 itemId: 'password', 
				 allowblank: false, 
				 inputType: 'password',	
				 
				}
			],
			buttons:[{
			text:'Sign In',
			action:'connect',
			margin: '5 5 5 5',

			
				/*listeners :{ 
					click: function(){ 
						var username = this.up('form').down('#username').getValue(); 
						var password = this.up('form').down('#password').getValue(); 
						alert(username+"   "+password);
					} 
				}*/
			
			}]
	
	});
