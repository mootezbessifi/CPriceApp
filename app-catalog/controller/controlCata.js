Ext.define('Cata.controller.controlCata', {
    extend: 'Ext.app.Controller',
	
	stores: ['gridStore','graphStore'],
	models: ['gridModel','graphModel'],
	views:['LiveSearchGridPanel','LiveSearchGrid','uploadCatalog','productShow'],
	 

	 init: function() {
        this.control({
            
        });
    }

});
