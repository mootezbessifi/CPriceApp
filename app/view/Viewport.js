Ext.define('SimpleTasks.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Border'
    ],
	layout:'border',
	items:[{
			xtype:'toolbar',
			region:'north',
			items:['->',{
				xtype:'button',
				text:'Log Out',
				id:'logout',
				width:100,
				listeners:{
						'click':function(){
						window.location='http://localhost/CPriceApp/index.php';
								Ext.Ajax.request({
									url:'php/logOut.php',
								});
						
							}
						}
			}]
		
		},{
		xtype:'tabpanel',
		region:'center',
		layout:'fit',
		items:[{
			title:'Catalogs',
			layout:'border',
				items:[{
					xtype:'dashView',
					region:'center',
					id:'panShow',
					height:410,
					
					
				},{
					xtype: 'LiveSearchGrid',
					id:'LSGP',
					region:'south'
					
				}]
			
		},{
			title:'Promotions',
			layout: 'border',			
				items: [
					{
						xtype: 'tasksToolbar',
						region: 'north'
					},
					{
						xtype: 'listTree',
						region: 'west',
						width: 300,
						collapsible: true,
						split: true
					},
					{
						region: 'center',
						xtype: 'taskGrid',
						title: 'All Lists'
					}
				]
		}]
		
    }]

});
