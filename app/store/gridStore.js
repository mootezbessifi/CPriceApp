Ext.define('SimpleTasks.store.gridStore', {
    extend: 'Ext.data.Store',
    model: 'SimpleTasks.model.gridModel',    
    autoLoad: true,
    proxy: {
        type: 'ajax',
		url : 'php/gridContent.php',
        reader: {
            type: 'json',
            root: 'dataGrid',
            successProperty: 'success'
        }
    },
    listeners:{
		load:function(sender, node, records){
		 Ext.each(records, function(record, index){
                console.log(record);
                if(record==false){
					window.location='http://localhost/CPriceApp/index.php';
				}
            }, this);
		}
	}

});
