Ext.define('SimpleTasks.store.pieStore', {
    extend: 'Ext.data.Store',
    model: 'SimpleTasks.model.pieModel',    
    autoLoad: true,
    proxy: {
        type: 'ajax',
     
		url : 'php/pie.php',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }

});
