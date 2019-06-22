var expect = require('chai').expect;
var data = require('./fourth_exports');
describe('economical_bowler()', function () {
	it('the top 5 economical bowlers.', function () {
		var result = data.economical_bowler([
			{ 'bowler': 'TS Mills', 'extra_runs': '0', 'total_runs': '4' },
			{ 'bowler': 'TS Mills', 'extra_runs': '0', 'total_runs': '1' },
			{ 'bowler': 'TS Mills', 'extra_runs': '0', 'total_runs': '0' },
			{ 'bowler': 'TS Mills', 'extra_runs': '0', 'total_runs': '0' },
			{ 'bowler': 'TS Mills', 'extra_runs': '2', 'total_runs': '0' },
			{ 'bowler': 'TS Mills', 'extra_runs': '0', 'total_runs': '0' },
			{ 'bowler': 'TS Mills', 'extra_runs': '1', 'total_runs': '0' },
			{ 'bowler': 'A Choudhary', 'extra_runs': '0', 'total_runs': '4' },
			{ 'bowler': 'A Choudhary', 'extra_runs': '0', 'total_runs': '1' },
			{ 'bowler': 'A Choudhary', 'extra_runs': '1', 'total_runs': '0' },
			{ 'bowler': 'A Choudhary', 'extra_runs': '0', 'total_runs': '1' },
			{ 'bowler': 'A Choudhary', 'extra_runs': '0', 'total_runs': '0' },
			{ 'bowler': 'A Choudhary', 'extra_runs': '0', 'total_runs': '0' },
			{ 'bowler': 'A Choudhary', 'extra_runs': '0', 'total_runs': '0' },
			{ 'bowler': 'YS Chahal', 'extra_runs': '0', 'total_runs': '4' },
			{ 'bowler': 'YS Chahal', 'extra_runs': '1', 'total_runs': '0' },
			{ 'bowler': 'YS Chahal', 'extra_runs': '0', 'total_runs': '0' },
			{ 'bowler': 'YS Chahal', 'extra_runs': '0', 'total_runs': '2' },
			{ 'bowler': 'YS Chahal', 'extra_runs': '0', 'total_runs': '0' },
			{ 'bowler': 'YS Chahal', 'extra_runs': '0', 'total_runs': '1' },
			{ 'bowler': 'S Aravind', 'extra_runs': '0', 'total_runs': '0' },
			{ 'bowler': 'S Aravind', 'extra_runs': '0', 'total_runs': '4' },
			{ 'bowler': 'S Aravind', 'extra_runs': '0', 'total_runs': '0' },
			{ 'bowler': 'S Aravind', 'extra_runs': '0', 'total_runs': '0' },
			{ 'bowler': 'S Aravind', 'extra_runs': '0', 'total_runs': '0' },
			{ 'bowler': 'S Aravind', 'extra_runs': '0', 'total_runs': '0' },
			{ 'bowler': 'SR Watson', 'extra_runs': '0', 'total_runs': '2' },
			{ 'bowler': 'SR Watson', 'extra_runs': '1', 'total_runs': '2' },
			{ 'bowler': 'SR Watson', 'extra_runs': '0', 'total_runs': '4' },
			{ 'bowler': 'SR Watson', 'extra_runs': '1', 'total_runs': '1' },
			{ 'bowler': 'SR Watson', 'extra_runs': '1', 'total_runs': '4' },
			{ 'bowler': 'SR Watson', 'extra_runs': '1', 'total_runs': '0' },
		]);
		var expected_result = [['TS Mills', 0.2857142857142857], ['S Aravind', 0.6666666666666666], ['A Choudhary', 0.7142857142857143], ['YS Chahal', 1], ['SR Watson', 1.5]];
		expect(result).deep.equal(expected_result);
	});
});