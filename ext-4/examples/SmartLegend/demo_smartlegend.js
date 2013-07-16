/*
 *  Smart Legend extension demo application.
 *
 *  Version 0.99.
 *  
 *  Copyright (C) 2011-2012 Alexander Tokarev.
 *
 * This code is licensed under the terms of the Open Source LGPL 3.0 license.
 * Commercial use is permitted to the extent that the code/component(s) do NOT
 * become part of another Open Source or Commercially licensed development library
 * or toolkit without explicit permission.
 * 
 * License details: http://www.gnu.org/licenses/lgpl.html
*/
Ext.onReady(function () {
    var panel, chart, legend,
        store = Ext.create('Ext.data.Store', {
        fields: [ 'name', 'data' ],
        data: [
            { name: 'Field 0',  data: Math.random() * 100 },
            { name: 'Field 1',  data: Math.random() * 100 },
            { name: 'Field 2',  data: Math.random() * 100 },
            { name: 'Field 3',  data: Math.random() * 100 },
            { name: 'Field 4',  data: Math.random() * 100 },
            { name: 'Field 5',  data: Math.random() * 100 },
            { name: 'Field 6',  data: Math.random() * 100 },
            { name: 'Field 7',  data: Math.random() * 100 },
            { name: 'Field 8',  data: Math.random() * 100 }
        ]
    });
   
    var MainPanel = Ext.create('widget.panel', {
        width: 400,
        //height: 800,
        resizable : true,
        id: 'MainPanel',
        title: 'My Custom Charts',
        renderTo: Ext.getBody(),
        autoScroll: true,
        layout:{
			type:'vbox',
			aligh : 'stretch'
		},
        listeners :{
			'afterrender': function(){
				panel1 = drawCustomChart(store,'firt_chart','Workload', 400, 400);
				this.add(panel1);
				chart1 = panel1.down('chart');
				chart1.legend = Ext.create('Ext.ux.chart.SmartLegend', {
					position: 'bottom',
					chart:	chart1,
					rebuild:	true,
					boxStrokeWidth:	0.5
				});
				panel2 = drawCustomChart(store,'second_chart','Remaining', 400, 400);
				this.add(panel2);
				chart2 = panel2.down('chart');
				chart2.legend = Ext.create('Ext.ux.chart.SmartLegend', {
					position: 'bottom',
					chart:	chart2,
					rebuild:	true,
					boxStrokeWidth:	0.5
				});
			}
		}
    });

});
