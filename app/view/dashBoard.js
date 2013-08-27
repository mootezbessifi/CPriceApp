Ext.define('SimpleTasks.view.dashBoard',{
			extend:'Ext.form.Panel',
			alias:'widget.dashView',
			id:'dashForm',
			title:'dashBoard',
			layout:'border',
			items:[{
					region:'center',
					xtype:'productShow',
					width:'60%'
				},{
					xtype:'pieShow',
					region:'east',
					width:'40%'
			}]
		
		
});
