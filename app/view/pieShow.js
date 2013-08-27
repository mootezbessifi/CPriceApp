Ext.require('Ext.chart.*');
Ext.require(['Ext.layout.container.Fit', 'Ext.window.MessageBox']);

		var donut = false,
        chart = Ext.define('SimpleTasks.view.pieShow', {
			extend:'Ext.chart.Chart',
			alias:'widget.pieShow',
            xtype: 'chart',
			style: 'background:#fff',
            id: 'chartCmp2',
            animate: true,
            store: 'pieStore',
            shadow: true,
            legend: {
                position: 'bottom'
            },
            insetPadding: 30,
            theme: 'Base:gradients',
            series: [{
                type: 'pie',
                field: 'percentage',
                showInLegend: true,
                donut: donut,
                tips: {
                  trackMouse: true,
                  width: 140,
                  height: 31,
                  renderer: function(storeItem, item) {                    
                    this.setTitle(storeItem.get('marchant') + ': ' + storeItem.get('percentage') + '%');
                  }
                },
                highlight: {
                  segment: {
                    margin: 20
                  }
                },
                label: {
                    field: 'marchant',
                    display: 'rotate',
                    contrast: true,
                    font: '18px Arial'
                },listeners:{
					'itemmouseup':function(item){
						console.log(item.storeItem.data['marchant']);
					}
				}
            }]
        });


    /*var panel1 = Ext.create('widget.panel', {
        width: 1000,
        height: 600,
        resizable : true,
        title: 'Semester Trends',
        renderTo: Ext.getBody(),
        layout: {type:'fit'},
        tbar: [{
            enableToggle: true,
            pressed: false,
            text: 'Donut',
            toggleHandler: function(btn, pressed) {
                var chart = Ext.getCmp('chartCmp');
                chart.series.first().donut = pressed ? 35 : false;
                chart.refresh();
            }
        }],
        items: chart
    });*/
