function drawCustomChart(store,chart_id,chart_title, chart_width,chart_height){
	
	panel = Ext.create('widget.panel', {
				width: chart_width,
				height: chart_height,
				border: false,
				layout: 'fit',
				items: {
					xtype: 'chart',
					id: chart_id,
					insetPadding: 15,
					animate: Ext.isIE ? false : true,
					store: store,
					shadow: Ext.isIE ? false : true,
					legend: false,
					theme: 'Base:gradients',
					series: [{
						type: 'pie',
						field: 'data',
						showInLegend: true,
						highlight:true,
						label: {
							field : 'name',
							display: 'rotate',
							contrast: true,
							font: '14px Arial'
						},tips: {
							trackMouse: true,
							width: 140,
							height: 28,
							renderer: function(storeItem, item) {
								//calculate percentage.
								var total = 0;
								store.each(function(rec) {
									total += rec.get('data');
								});
								this.setTitle(storeItem.get('name') + ': ' + Math.round(storeItem.get('data') / total * 100) + '%');
						  }
						},listeners:{
							'itemmouseup':function(item){
								console.log("action handler not implemented yet..");
							}
						}
					}],
					items:[{
						type  : 'text',
						text  : chart_title,
						font  : '18px Arial',
						width : 100,
						height: 30,
						
						x : 25, //the sprite x position
						y : 20  //the sprite y position
					}]
				}
	});
	return panel;
}
