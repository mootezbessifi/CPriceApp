Ext.define('SimpleTasks.store.graphStore', {
    extend: 'Ext.data.Store',
    model: 'SimpleTasks.model.graphModel',    
    autoLoad: true,
    proxy: {
        type: 'ajax',
     
		url : 'php/graphShow.php',
		success:function(result,action){
		var obj = Ext.JSON.decode(result.responseText);
		var msg = obj.success;
		if(msg==false){
				window.location='http://localhost/CPriceApp/index.php';
			}
		},
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }

});
