Ext.define('SimpleTasks.controller.controlCata', {
    extend: 'Ext.app.Controller',
	
	stores: ['gridStore','graphStore','pieStore'],
	models: ['gridModel','graphModel','pieModel'],
	views:['LiveSearchGridPanel','LiveSearchGrid','uploadCatalog','productShow','pieShow','dashBoard'],
	 

	 init: function() {
        this.control({
            
        });
    }

});
