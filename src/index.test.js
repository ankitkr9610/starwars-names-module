var expect = require('chai').expect;
var starWars = require('./index');

describe('starwars-names-module', function(){
    describe('all', function(){
        it('should be an array of strings', function(){
            expect(starWars.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array){
                return array.every(function(item){
                    return typeof item === 'string';
                });
            }
        });

        it('should contain Captain Rex', function(){
            expect(starWars.all).to.include('Captain Rex');
        });
    });

    describe('random', function(){
        it('should return a random name', function(){
            var randomName = starWars.random();
            expect(randomName).to.include(randomName);
        });
    });
});