var matches = require('./matches.json');


function matches_won_teams(matches){
	var data=[];
	var result= {};
	matches.forEach(element => {
		data.push({ season:element['season'],
			winner:element['winner']});
	});
	for(var i in data)
		if(result[data[i].season] === undefined){
			result[data[i].season]={'Chennai Super Kings': 0,
			'Deccan Chargers': 0,
			'Delhi Daredevils': 0,
			'Gujarat Lions': 0,
			'Kings XI Punjab': 0,
			'Kochi Tuskers Kerala': 0,
			'Kolkata Knight Riders': 0,
			'Mumbai Indians': 0,
			'Pune Warriors': 0,
			'Rajasthan Royals': 0,
			'Rising Pune Supergiant': 0,
			'Rising Pune Supergiants': 0,
			'Royal Challengers Bangalore': 0,
			'Sunrisers Hyderabad': 0,
			'': 0};
			result[data[i].season][data[i].winner]=1;   
		}
		else{
			if(result[data[i].season][data[i].winner]){
				result[data[i].season][data[i].winner]++;
			}

			else{
				result[data[i].season][data[i].winner]=1;
			}
		}
	//console.log(result);
	return result;
}
var result = matches_won_teams(matches);
var data = JSON.stringify(result);
var fs = require('fs');
fs.writeFile('./highCharts/second.json', data);