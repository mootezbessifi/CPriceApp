Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'CP',

	appFolder: 'app',
	controllers: ['controller'],
	autoScroll:true,
	
	
	
    launch: function() {
		var log= Ext.create('Ext.container.Viewport', {
          
            items: [
            {
                xtype: 'loginview',
                id:'logview',
                         
            }
			],
			
       
        });
			log.items.first().setPosition(898,168);
			$(document).ready(function(){
			$("#textButton").click(function(){
					Ext.getCmp("inscrit").hide();

				//Ext.get("logview").slideOut();
			});
			});
			
    }
});
