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
						region:'south',
						//id:'panShow',
						width: 800,
						height: 600,
						minHeight: 400,
						minWidth: 550,
						items:[{xtype:'productShow'}]
						
					},{
						xtype:'panel',
						title:"test",
						region:'south',
						width: 400,
						height: 500,
						minHeight: 400,
						minWidth: 550
						
					}]
            	},{
					title:'Promotions',
				}]
			}
        });				
    }
    
});

