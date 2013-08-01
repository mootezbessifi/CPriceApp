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
Ext.Loader.setPath('Ext.ux', 'assets/js/statusbar/');

var status = Ext.create('Ext.Panel', {
    bbar: Ext.create('Ext.ux.StatusBar', {
        
        id: 'form-statusbar',
        defaultText: '<font color = "green"><b>Ready<b></font>'
        })
});

var log = Ext.define('CP.view.login.login',{
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
					blankText:"Username Required !", 
					
				},{
					 xtype: 'textfield',
					 fieldLabel: 'Password <span class="req" style="color:red"> * </span>',
					 allowBlank: false,
					 margin: '0 30 10 0',
					 name: 'password', 
					 itemId: 'password', 
					 inputType: 'password',
					 vtypeText:"exple@mail.fr",
					 blankText:"Password Required !"	 
				},{
					xtype:'checkbox',
					boxLabel : 'Remember me',
					fieldLabel: '',
					margin: '10 20 0 0',
					checked: true,
					style: 'right:-104px;position:relative;',
					id: 'save'
				},
				{
				 html: '<a class="lien" href="recup.php"><font color="black"><center>Password forgotten?</center></font></a>',	
					bodyStyle:
					{
						paddingTop: '20px'
					},
					margin: '0 20 10 0'
				},
				{
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
				text:'Sign In',
				action:'connect',
				id:'signin',
				margin: '5 5 5 5',	
				
			}]
	
	});
