Ext.define('SimpleTasks.model.Task', {
    extend: 'Ext.data.Model',
    requires:[
        'Ext.data.proxy.LocalStorage',
        'Ext.data.proxy.Ajax'
    ],
    fields: [
        { name: 'id', type: 'int' },
        { name: 'title' },
        { name: 'list_id', type: 'int' },
        { name: 'oldPrice', type: 'int' },
        { name: 'newPrice', type:'int' },
		{ name: 'startDate', type: 'date', dateFormat: 'c' },
        { name: 'due', type: 'date', dateFormat: 'c' },
        { name: 'reminder', type: 'date', dateFormat: 'c' },
        { name: 'done', type: 'boolean', defaultValue: false },
        { name: 'note' }
    ],

    proxy: SimpleTasksSettings.useLocalStorage ? {
        type: 'localstorage',
        id: 'SimpleTasks-Task'
    } : {
        type: 'ajax',
        api: {
            create: 'php/task/create.php',
            read: 'php/task/read.php',
            update: 'php/task/update.php',
            destroy: 'php/task/delete.php'
        },
        reader: {
            type: 'json',
            root: 'tasks',
            messageProperty: 'message'
        }
    }

});
