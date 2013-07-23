/*
Ext.override('Ext.layout.Layout', {
    renderItem: function(item, target, position) {
        
    if (item && item.isFieldLabelable && !item.rendered && item.fieldLabel && item.allowBlank == false) {
        item.fieldLabel += ' <span class="req" style="color:red"> * </span>';
}
        
this.callOverridden(arguments);
}
});
*/
Ext.define('CP.view.login.login',{
			extend:'Ext.form.Panel',
			alias:'widget.loginview',
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
					
				},{
					 xtype: 'textfield',
					 fieldLabel: 'Password <span class="req" style="color:red"> * </span>',
					 allowBlank: false,
					 margin: '0 30 10 0',
					 name: 'password', 
					 itemId: 'password', 
					 inputType: 'password',
					 vtypeText:"exple@mail.fr",	 
				},{
					xtype:'checkbox',
					boxLabel : '',
					fieldLabel: 'Remember me',
					checked: true,
					style: 'left:-104px;position:relative;',
					name: 'save'
				},
				{
					xtype: 'box',
					autoEl: {tag: 'a', href: 'http://www.google.com', html: '<font color="black"><center>Password forgotten?</center></font>'},
					margin: '0 0 10 0',
				},
				{
					xtype: 'hidden',        
					id: 'connexion',
					name: 'connexion'
				}
				],
			listeners:{
					//sliding the login form up when rendering it. The same thing is possible with 'afterrender' event
					'render': function(){
						Ext.get('logview').slideOut();
					}
			},
			buttons:[{
				text:'Sign In',
				action:'connect',
				id:'signin',
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
