Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'CP',

	appFolder: 'app',
	controllers: ['controller'],
	autoScroll:true,
	
	
	
    launch: function() {
		var log = Ext.create('Ext.container.Viewport', {
          	id:'mainPortal',
            items: [
            {
                xtype:'loginview',
                id:'logview'
            }],
        });
			log.items.first().setPosition(898,168);
			$(document).ready(function(){
			$("#textButton").click(function(){
				var portal = Ext.getCmp("mainPortal");
				//removing the css class that hides this login form and sliding the panel down
				portal.down('form').removeCls('hideForm');
				Ext.get('logview').slideIn();
			});
			});
			
    }
});
