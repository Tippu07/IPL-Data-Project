
module.exports = {
	matches_year(years) {
		var count = {};
		years.forEach(function (year) {
			count[year] = (count[year] || 0) + 1;
		});
		return count;
	}
};

