### SocialCops Road Accident Report is a html based report with extensive use of javascript to show the data in chart forms for better and easy understanding. The data used to depict figures and other material are from third party : mnorth.nic.in

## Displaying Accidental Report Chart

##### 1. To render accident chart segregated by months in terms of number of accidents happenend, no of people killed and no of people injured

```javascript
chart.multiline('multilineChartDiv', 'api/monthly-report.json');
```

where,
	chart.multiline - is a custom wrapper around AMCharts (third party library, used for rendering multi-axis chart)
	multilineChartDiv - is the id of div where we want to render the chart
	api/monthly-report.json - url of API endpoint for monthly report


##### 2. To render accident chart segregated by number of accidents happenend over states

```javascript
chart.radar('radarChartDiv', 'api/state-report.json');
```

where,
	chart.radar - is a custom wrapper around AMCharts (third party library, used for rendering radar chart)
	radarChartDiv - is the id of div where we want to render the chart
	api/state-report.json - url of API endpoint for state report


##### 3. To render accident chart segregated by vehicle modes of accidents

```javascript
chart.stack('vehicleChartDiv', 'api/vehicle-report.json');
```

where,
	chart.stack - is a custom wrapper around AMCharts (third party library, used for rendering stacked up chart)
	vehicleChartDiv - is the id of div where we want to render the chart
	api/vehicle-report.json - url of API endpoint for state report


##### AMChart is a third party plugin which is used to render the charts, three types of charts have been used in this project, radar chart, multi-axis chart and stacked - refer here for [documentation](https://docs.amcharts.com/3/javascriptcharts)