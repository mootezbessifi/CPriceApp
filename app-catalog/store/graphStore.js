Ext.define('Cata.store.graphStore', {
    extend: 'Ext.data.Store',
    model: 'Cata.model.graphModel',    
    autoLoad: true,
    proxy: {
        type: 'ajax',
     
		url : 'php/graphShow.php',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }

});
