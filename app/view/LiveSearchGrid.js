Ext.define('SimpleTasks.view.LiveSearchGrid' ,{
	extend:'SimpleTasks.view.LiveSearchGridPanel',
	alias: 'widget.LiveSearchGrid',
	store:'gridStore',
	id:'LSGrid',
	
//	scrollable:true,
	columnLines: true,
	columns: [{
		header   : 'IdCatalog',
		flex     : 1,
		sortable : false,
		width:'15%', 
		dataIndex: 'idCatalog'
	},{
		header     : 'IdAbonnee', 
		width    : '25%',
		sortable : true,
		dataIndex: 'idAbonnee'
	},{
		header     : 'nomCatalog', 
		width    : '20%',
		sortable : true,
		dataIndex: 'nomCatalog',
	},{
		xtype    : 'datecolumn',
		header     : 'Date Update Catalog', 
		width    : '40%', 
		sortable : true, 
		dataIndex: 'dateUploadCatalog'
	}],
	title: 'Live Search Grid',
	height:210,
	viewConfig: {
		stripeRows: true
	},
	listeners:{
		itemclick:function(dv, record, item, index, e) {
                        var del = Ext.getCmp('delete');
                        del.setDisabled(false);
					}
		
		}
});
