describe('calculator', function () {

    var calc;

    beforeEach(function () {
        calc = new Calculator();

        /* register these matchers before each test cases. Once a custom matcher is registered with Jasmine, it is available on any test case.*/
        jasmine.addMatchers({
            toBeBetween: function () {
                return {
                    compare: function (actual, expected) {
                        //compare function that takes an actual value and expected value. 
                        // expect(1, 3).matcher(0.3 and 0.34);   actual will be 1 and 3 and expected will be 0.3 and 0.34.
                        var result = { pass:(actual >= 0.3 && actual <= 0.34) };
                        
                        // Our custom logic goes here. 
//                        result.message = actual + 'is not valid';
                        // This will be shown when test get failed
                        return result;
                        //The compare function must return a result object with: 
                        // 1. A 'pass' property that is a boolean result of the matcher
                        // 2. A 'message' property that is a string to show details when test get failed. 

                    }
                };
            }
        });
    });

    it("should be able to add 1 and 1", function () {
        expect(calc.add(1, 1)).toBe(2);
    });

    it("should be able to divide 6 and 2", function () {
        expect(calc.divide(6, 2)).toBe(3);
    });

    it("should be able to divide a rational number", function () {
        expect(calc.divide(1, 3)).toBeBetween(0.3, 0.34);
    })
});
