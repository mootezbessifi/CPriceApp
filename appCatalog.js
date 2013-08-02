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
	            items: [{
					xtype: 'LiveSearchGrid',
                	id:'LSGP'
            	},{
					title:'Another Viewport side',
				}]
			}
        });				
    }
    
});

