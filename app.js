if (SimpleTasksSettings.useLocalStorage && !Ext.supports.LocalStorage) {
	alert('Simple Tasks is configured to use HTML5 Local Storage, but your browser does not support Local Storage');
} else {
    Ext.Loader.setPath('Ext.ux', '../../ext4/examples/ux/')
    Ext.Loader.setConfig({
        enabled: true
    });
Ext.Loader.setPath('Ext.sb', 'assets/js/statusbar/');
Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.tip.QuickTipManager'
]);

    Ext.application({
        name: 'SimpleTasks',
       	appFolder: './app',
        autoCreateViewport: true,
        controllers: ['Lists', 'Tasks','controlCata'],
		autoScroll:true,
        launch: function() {
            Ext.optionsToolbarAlign = 'br-br';
        }
    });
}
