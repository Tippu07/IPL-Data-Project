const csvFilePath=('matches.csv');
const csv= require('csvtojson');
csv()
	.fromFile('matches.csv')
	.then((matchesjson)=>{

		//console.log(matchesjson)

		//Finding total num of matches
		let numOfMatches = {};
		matchesjson.forEach(row => {
			if(numOfMatches[row.season]===undefined){
				numOfMatches[row.season]=1;
			}
			else{
				numOfMatches[row.season]++;
			}
		});

		console.log(numOfMatches);
		var Highcharts = require('highcharts');

		// Load module after Highcharts is loaded
		require('highcharts/modules/exporting')(Highcharts);


		Highcharts.chart('container', {
			chart: {
				type: 'column'
			},
			title: {
				text: 'IPL DATA'
			},
			subtitle: {
				text: ''
			},
			xAxis: {
				categories: Object.keys(numOfMatches),
				title: {
					text: 'year'
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'number fo matches',
					align: 'high'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				valueSuffix: ' matches'
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				}
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'top',
				x: -40,
				y: 80,
				floating: true,
				borderWidth: 1,
				backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
				shadow: true
			},
			credits: {
				enabled: false
			},
			series: [{
				name: 'matches',
				data: Object.values(numOfMatches)
			}]
		});


	}).catch(console.log);

