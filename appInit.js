Ext.Loader.setConfig({
	enabled: true
});
Ext.Loader.setPath('Ext.sb', 'assets/js/statusbar/');

Ext.application({
    name: 'CP',
	appFolder: 'appInit',
	controllers: ['controller'],
	autoScroll:true,
	requires : ['Ext.container.Viewport','Ext.form.*'],
    launch: function() {
		var log = Ext.create('Ext.container.Viewport', {
          	id:'mainPortal',
            items: [
            {
                xtype:'loginview',
                id:'logview'
            }],
        });
			log.items.first().setPosition(898,180);
			$(document).ready(function(){
			$("#signButton").click(function(){
				var portal = Ext.getCmp("mainPortal");
				//removing the css class that hides this login form and sliding the panel down
				portal.down('form').removeCls('hideForm');
				Ext.get('logview').slideIn();
			});
			});
			
    }
});
