Ext.define('Cata.model.gridModel', {
    extend: 'Ext.data.Model',
    fields: [
           {name: 'idCatalog', type: 'string'},
           {name: 'idAbonnee', type: 'integer'},
           {name: 'nomCatalog', type: 'string'},
           {name: 'dateUploadCatalog', type: 'date', dateFormat: 'Y-m-d H:i:s'}
        ]
});
