Ext.define('CP.view.login.passForgot',{
	extend:'Ext.window.Window',
	alias:'widget.passForgot',
	title:'Password Recovery',
	layout:'fit',
	autoShow:true,
	modal:true,
	items:[{
			 xtype: 'form',
				id: 'recupForm',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'marketName',
                        id:'marketName',
						margin: '10 0 10 0',
                        fieldLabel: 'Market Name:',
                        emptyText:'enter the market name',
                        allowBlank: false,
						blankText:"market name is required!",
                    },
                    {
                        xtype: 'textfield',
						name: 'marketEmail',
						id: 'marketEmail',
						fieldLabel: 'Recovery Email:',
						margin: '10 10 10 0',
						emptyText:'example@mail.com',
						allowBlank: false,
						blankText:"email is required!",
						anchor: '100%'
                    }
                ]
		}
	
	],
	buttons:[{
				xtype:'button',
				text:'<center>Send</center>',
				handler:function(button){
							var form = Ext.getCmp('recupForm').getForm();
							if(form.isValid()){
								var marketName=Ext.getCmp('marketName').getValue();
								var marketEmail=Ext.getCmp('marketEmail').getValue();
								form.submit({
									params:{
										name:marketName,
										email:marketEmail
									},
									url: 'php/passRecovery.php',
									success: function(result, option) {
										Ext.Msg.alert('Success', 'Your email has been sent !');
										button.up("window").close();
									},
									failure:function(result, option){
										Ext.Msg.alert('Success', 'this operation has been failed !');
									}
								});
							}
						}
			}
	]
});
