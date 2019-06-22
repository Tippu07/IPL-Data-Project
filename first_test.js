var expect = require('chai').expect;
var data = require('./first_exports');
describe('matches_year()', function () {
	it('should return count of years', function () {
		var result = data.matches_year([2005, 2005, 2005, 2006, 2006]);
		var expected_result = { '2005': 3, '2006': 2 };
		expect(result).deep.equal(expected_result);
	});
});