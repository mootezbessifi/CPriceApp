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
				xtype:'button',
				text:'Sign In',
				width:200,
				height: 100,			
			},
			{
					xtype: 'learnview',
			}
			],
			
       
        });
        log.items.first().setPosition(900,300);
    }
});
