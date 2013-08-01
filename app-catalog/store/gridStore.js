Ext.define('Cata.store.gridStore', {
    extend: 'Ext.data.Store',
    model: 'Cata.model.gridModel',    
    autoLoad: true,
    proxy: {
        type: 'ajax',
      /*  api: {
        read: 'php/gridContent.php'
    },*/
		url : 'php/gridContent.php',
        reader: {
            type: 'json',
            root: 'dataGrid',
            successProperty: 'success'
        }
    }

});
