var expect = require('chai').expect;
var exports_data = require('./third_exports');
describe('extra_runs()', function () {
	it('should return year 2016 plot the extra runs conceded per team.', function () {
		var result = exports_data.extra_runs([577, 578, 579], [{ 'match_id': 577, 'bowling_team': 'RCB', 'extra_runs': 1 },
			{ 'match_id': 577, 'bowling_team': 'RCB', 'extra_runs': 1 },
			{ 'match_id': 577, 'bowling_team': 'CSK', 'extra_runs': 1 },
			{ 'match_id': 577, 'bowling_team': 'SRH', 'extra_runs': 1 }]
		);
		var expected_result = { 'RCB': 2, 'CSK': 1, 'SRH': 1 };
		expect(result).deep.equal(expected_result);
	});
});