Ext.define('Cata.view.LiveSearchGrid' ,{
	extend:'Cata.view.LiveSearchGridPanel',
	alias: 'widget.LiveSearchGrid',
	store:'gridStore',
	id:'LSGrid',
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
