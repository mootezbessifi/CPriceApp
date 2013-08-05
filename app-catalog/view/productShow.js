Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.layout.container.Fit', 'Ext.fx.target.Sprite', 'Ext.window.MessageBox']);

var chart = Ext.define('Cata.view.productShow',{
		extend: 'Ext.chart.Chart',
		alias:'widget.productShow',
		title:'Sales by category',
		layout:'fit',
		
		id: 'chartCmp',
            xtype: 'chart',
            style: 'background:#fff',
            animate: true,
            shadow: true,
            
            store: 'graphStore',
            axes: [{
                type: 'Numeric',
                position: 'left',
                fields: ['percentage'],
                label: {
                    renderer: Ext.util.Format.numberRenderer('0,0')
                },
                title: '% en nombre d\'achat',
                grid: true,
                minimum: 0
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['category'],
                title: 'Category'
            }],
            series: [{
                type: 'column',
                axis: 'left',
                highlight: true,
                tips: {
                  trackMouse: true,
                  width: 140,
                  height: 28,
                  renderer: function(storeItem, item) {
                    this.setTitle(storeItem.get('category') + ': ' + storeItem.get('percentage') + ' %');
                  }
                },
                label: {
                  display: 'insideEnd',
                  'text-anchor': 'middle',
                    field: 'percentage',
                    renderer: Ext.util.Format.numberRenderer('0'),
                    orientation: 'vertical',
                    color: '#666'
                },
                xField: 'category',
                yField: 'percentage'
            }]

});
 var courbe = Ext.create('Ext.Window', {
        width: 800,
        height: 600,
        minHeight: 400,
        minWidth: 550,
        hidden: false,
        maximizable: true,
        layout: 'fit',
        items: chart    
    });
