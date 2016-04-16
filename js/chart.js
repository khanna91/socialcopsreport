var chart = function() {
	var _priv = {
		radarOptions : {
			"type": "radar",
  			"theme": "light",
  			"valueAxes": [ {
				"axisTitleOffset": 20,
				"minimum": 0,
				"axisAlpha": 0.15
			} ],
			"graphs": [ {
				"balloonText": "[[value]] accidents",
				"bullet": "round",
				"valueField": "accident"
			} ],
			"categoryField": "state",
			"export": {
				"enabled": false
			}
		},

		multilineOptions : {
			"type": "serial",
			"theme": "dark",
			"path" : "./",
			"legend": {
			    "useGraphSettings": true
			},
			"valueAxes": [{
			    "id":"v1",
			    "axisColor": "#FF6600",
			    "axisThickness": 2,
			    "gridAlpha": 0,
			    "axisAlpha": 1,
			    "position": "left"
			}, {
			    "id":"v2",
			    "axisColor": "#FCD202",
			    "axisThickness": 2,
			    "gridAlpha": 0,
			    "axisAlpha": 1,
			    "position": "right"
			}, {
			    "id":"v3",
			    "axisColor": "#B0DE09",
			    "axisThickness": 2,
			    "gridAlpha": 0,
			    "offset": 50,
			    "axisAlpha": 1,
			    "position": "left"
			}],
			"graphs": [{
			    "valueAxis": "v1",
			    "lineColor": "#FF6600",
			    "bullet": "round",
			    "bulletBorderThickness": 1,
			    "hideBulletsCount": 30,
			    "title": "accidents",
			    "valueField": "accident",
				"fillAlphas": 0
			}, {
			    "valueAxis": "v2",
			    "lineColor": "#FCD202",
			    "bullet": "square",
			    "bulletBorderThickness": 1,
			    "hideBulletsCount": 30,
			    "title": "killed",
			    "valueField": "killed",
				"fillAlphas": 0
			}, {
			    "valueAxis": "v3",
			    "lineColor": "#B0DE09",
			    "bullet": "triangleUp",
			    "bulletBorderThickness": 1,
			    "hideBulletsCount": 30,
			    "title": "injured",
			    "valueField": "injured",
				"fillAlphas": 0
			}],
			"chartScrollbar": {},
			"chartCursor": {
			    "cursorPosition": "mouse"
			},
			"categoryField": "month",
			"categoryAxis": {
			    "parseDates": false,
			    "axisColor": "#DADADA",
			    "minorGridEnabled": true
			},
			"export": {
				"enabled": false
			}
		},

		stackAreaOptions : {
			"type": "serial",
		    "theme": "light",
		    "path" : "./",
		    "marginRight":30,
		    "legend": {
		        "equalWidths": false,
		        "periodValueText": "total: [[value.sum]]",
		        "position": "top",
		        "valueAlign": "left",
		        "valueWidth": 100
		    },
		    "valueAxes": [{
		        "stackType": "regular",
		        "gridAlpha": 0.07,
		        "position": "left",
		        "title": "Road Accidents by different mode"
		    }],
		    "graphs": [{
		        "balloonText": "<span style='font-size:14px; color:#000000;'>Car : <b>[[value]]</b></span>",
		        "fillAlphas": 0.6,
		        "hidden": false,
		        "lineAlpha": 0.4,
		        "title": "Cars",
		        "valueField": "cars"
		    }, {
		        "balloonText": "<span style='font-size:14px; color:#000000;'>Two Wheelers : <b>[[value]]</b></span>",
		        "fillAlphas": 0.6,
		        "lineAlpha": 0.4,
		        "title": "Two Wheelers",
		        "valueField": "twowheelers"
		    }, {
		        "balloonText": "<span style='font-size:14px; color:#000000;'>Pedestrian : <b>[[value]]</b></span>",
		        "fillAlphas": 0.6,
		        "lineAlpha": 0.4,
		        "title": "Pedestrian",
		        "valueField": "pedestrian"
		    }, {
		        "balloonText": "<span style='font-size:14px; color:#000000;'>Trucks : <b>[[value]]</b></span>",
		        "fillAlphas": 0.6,
		        "lineAlpha": 0.4,
		        "title": "Truck/Lorry",
		        "valueField": "truck"
		    }, {
		        "balloonText": "<span style='font-size:14px; color:#000000;'>Buses : <b>[[value]]</b></span>",
		        "fillAlphas": 0.6,
		        "lineAlpha": 0.4,
		        "title": "Buses",
		        "valueField": "bus"
		    }],
		    "plotAreaBorderAlpha": 0,
		    "marginTop": 10,
		    "marginLeft": 0,
		    "marginBottom": 0,
		    "chartScrollbar": {},
		    "chartCursor": {
		        "cursorAlpha": 0
		    },
		    "categoryField": "year",
		    "categoryAxis": {
		        "startOnAxis": true,
		        "axisColor": "#DADADA",
		        "gridAlpha": 0.07,
		        "title": "Year",
		        "guides": [{
		            category: "2001",
		            toCategory: "2003",
		            lineColor: "#CC0000",
		            lineAlpha: 1,
		            fillAlpha: 0.2,
		            fillColor: "#CC0000",
		            dashLength: 2,
		            inside: true,
		            labelRotation: 90,
		            label: "fines for speeding increased"
		        }, {
		            category: "2007",
		            lineColor: "#CC0000",
		            lineAlpha: 1,
		            dashLength: 2,
		            inside: true,
		            labelRotation: 90,
		            label: "motorcycle fee introduced"
		        }]
		    },
		    "export": {
		    	"enabled": false
		    }
		},

		render : function(id, data, type) {
			var options = _priv[type + 'Options'];
			options.dataProvider = data;
			var chart = AmCharts.makeChart( id, options );
		},

		ajax : function(id, url, type) {
			fetch(url).then(function(response) {
			    return response.json()
			}).then(function(json) {
				_priv.render(id, json, type);
			}).catch(function(ex) {
			    throw ex;
			});
		}
	}
	return {
		radar : function(id, url) {
			_priv.ajax(id, url, 'radar');			
		},

		multiline : function(id, url) {
			_priv.ajax(id, url, 'multiline');
		},

		stack : function(id, url) {
			_priv.ajax(id, url, 'stackArea');
		}
	}
}();