Ext.define('Cata.controller.controlCata', {
    extend: 'Ext.app.Controller',
	
	stores: ['gridStore'],
	models: ['gridModel'],
	views:['LiveSearchGridPanel','LiveSearchGrid','uploadCatalog'],
	 

	 init: function() {
        this.control({
            
        });
    }

});
