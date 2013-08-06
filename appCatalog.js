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
				layout:'fit',
	            items: [{
					title:'Catalogs',
					items:[{
						xtype: 'LiveSearchGrid',
						id:'LSGP',
						
					},{
						title:"Dashboard",
						id:'panShow',
						height:400,
						layout:'border',
						items:[{
							region:'center',
							xtype:'productShow',
							width:'70%'
						},{
							region:'east',
							width:'30%'
						}]
					}]
            	},{
					title:'Promotions',
				}]
			}
        });				
    }
    
});

