describe('tondeuse', function () {

    it("should pass the example", function () {
        var input = '5 8\n' +
            '0 0\n' +
            'G\n' +
            '0\n' +
            'AADAGDDAAAGAGGAADAGGAAA';
        var output = tondeuse(input);
        var expectedOutput = {
            x: 4,
            y: 2,
            dir: 'D'
        };
        expect(output).toEqual(expectedOutput);
    });

    it("should pass with wall", function(){
        var input = '5 8\n' +
            '0 0\n' +
            'D\n' +
            '1\n' +
            '1 0\n' +
            'ADA';
        var output = tondeuse(input);
        var expectedOutput = {
            x: 0,
            y: 1,
            dir: 'B'
        };
        expect(output).toEqual(expectedOutput);

    });

    it("should collides if in wall", function(){
        var walls = {
            '0 0': 1
        };

        var position = {
            x:0,
            y:0
        };
        expect(isColliding(walls, position));
    });

    describe("position", function(){
       it("should return 1 0 if try go to D", function(){
         var pos = {
             x: 1,
             y: 0
         };
           var position = getPositionAfterMovingForward(getOrientation("D"), {x:0,y:0});
           expect(position).toEqual(pos);
       });
    });

    describe("orientation", function() {
        it("should returns 0 if orientation is H", function() {
            expect(getOrientation("H")).toBe(0);
        });

        it("should returns D if orientation is 1", function() {
            expect(getTextualOrientation(1)).toBe("D");
        });

        it("should returns G if orientation is -1", function() {
            expect(getTextualOrientation(-1)).toBe("G");
        });
    });
});
