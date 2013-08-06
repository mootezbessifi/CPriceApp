Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', 'assets/js/statusbar/');

Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.tip.QuickTipManager'
]);
Ext.application({
	
	name: 'Cata',
	appFolder: 'app-catalog',
	controllers: ['controlCata'],
	autoScroll:true,
	
	
	launch: function() {
		Ext.create('Ext.container.Viewport', {
			items:{
				xtype:'tabpanel',
				layout:'border',
	            items: [{
					title:'Catalogs',
					//layout:'border',
					items:[{
					xtype: 'LiveSearchGrid',
                	region:'South',
                	id:'LSGP'
					},{
						xtype:'panel',
						title:"testing",
						height:'60%',
						region:'south',
						layout:'fit',
						items:[{xtype:'productShow'}]
						
					}]
            	},{
					title:'Promotions',
				}]
			}
        });				
    }
    
});

