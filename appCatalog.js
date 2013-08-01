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
			layout:'border',
            items: [{
                xtype: 'LiveSearchGrid',
                region: 'center',
                id:'LSGP'
            },{
				xtype:'panel',
				width: '10%',
				title:'Another Viewport side',
				region:'west'
			}]
        });				
    }
    
});

