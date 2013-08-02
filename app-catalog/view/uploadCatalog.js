Ext.define('Cata.view.uploadCatalog',{
		extend: 'Ext.window.Window',
		alias:'widget.uploadCatalog',
		title:'Upload Catalog',
		layout:'fit',
		id:'UploadDialog',
		autoShow:true,
		modal:true,
		
        items : [
            {
                xtype: 'form',
				id: 'cataForm',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'CatalogName',
                        id:'CatalogName',
						margin: '10 0 10 0',
                        fieldLabel: 'Catalog Name:'
                    },
                    {
                        xtype: 'filefield',
						name: 'AddCatalog',
						id: 'AddCatalog',
						fieldLabel: 'Add Catalog:',
						margin: '10 10 10 0',
						emptyText:'Select catalog',
						msgTarget: 'side',
						allowBlank: false,
						anchor: '100%',
						buttonText: 'Select Catalog...',
						buttonConfig: {iconCls: 'upload-icon'}
                    }
                ]
            }
        ],

        buttons: [{
						text: 'Upload',
						handler: function(button) {
							var form = Ext.getCmp('cataForm').getForm();
							var store = Ext.getCmp('LSGP').store;
							if(form.isValid()){
							var catalogName = Ext.getCmp('CatalogName').getValue();
								form.submit({
									params:{
										filename:catalogName
									},
									url: 'php/catalog-upload.php',
									waitMsg: 'Uploading your catalog...',
									success: function(fp, o) {
										console.log(fp);
										Ext.Msg.alert('Success', 'Your Catalog has been uploaded !');
										button.up("window").close();
									}
								});
								store.load();
							}
								
								
						}
					},
					{
						text: 'Cancel',
						scope: this,	
						handler: function(button){
								button.up("window").close();
							}
					}
		]
		

});
