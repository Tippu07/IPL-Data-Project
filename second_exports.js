module.exports={
	matches_won_teams(matches){
		var data=[];
		var result= {};
		matches.forEach(element => {
			data.push({ season:element['season'],
				winner:element['winner']});
		});
		//console.log(data);
		for(var i in data)
			if(result[data[i].season] === undefined){
				result[data[i].season]={};
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
		return result;
	}  
};