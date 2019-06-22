var expect = require("chai").expect;
var data = require("./sum");
describe("sum()",function(){
    it("Should return sum",function(){
           var result = data.sum(1,2);
           var expected_result = 3;
           expect(result).equal(expected_result);
    });
})
