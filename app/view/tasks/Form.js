Ext.define('SimpleTasks.view.tasks.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'taskForm',
    requires: [
       'Ext.layout.container.HBox',
       'Ext.form.field.Date',
       'Ext.ux.TreePicker'
    ],
    layout: 'hbox',
    cls: 'tasks-new-form',

    initComponent: function() {
        this.items = [
            {
                xtype: 'component',
                cls: 'tasks-new',
                width: 24,
                height: 24
            },
            {
                xtype: 'textfield',
                name: 'title',
                emptyText: 'Add a new promotion'
            },
            {
                xtype: 'treepicker',
                name: 'list_id',
                displayField: 'name',
                store: Ext.create('SimpleTasks.store.Lists', {storeId: 'Lists-TaskForm'}),
                width: 195
            },
            {
                xtype: 'textfield',
                name: 'oldPrice',
                emptyText: '0000 $',
                width:95,
                clear:true
            },
            {
                xtype: 'textfield',
                name: 'newPrice',
                emptyText: '0000 $',
                width:95
            },
            {
                xtype: 'datefield',
                name: 'startDate',
                value: new Date(),
                width: 95
            },
            {
                xtype: 'datefield',
                name: 'due',
                value: new Date(),
                width: 95
            }
        ];

        this.callParent(arguments);
    }

});
