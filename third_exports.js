module.exports = {
	extra_runs(match_id, deliveries) {
		var result_obj = {};
		match_id.forEach(id => {
			//console.log(id);
			deliveries.forEach(ele => {
				if (id === parseInt(ele['match_id'])) {
					if (result_obj[ele['bowling_team']]) {
						result_obj[ele['bowling_team']] += parseInt(ele['extra_runs']);
					}
					else {
						result_obj[ele['bowling_team']] = parseInt(ele['extra_runs']);
					}
				}
			});
		});
		return result_obj;
	}
};