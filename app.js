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
            },
				
			{
					xtype: 'learnview',
			}
			],
			
       
        });
			log.items.first().setPosition(902,168);
			/*$(document).ready(function(){
			$("div").click(function(){
			alert("The paragraph was clicked.");
			});
			});*/

    }
});
