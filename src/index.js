var starWarsNames = require('./starwars-names.json');
var randomStarWarsNames = require('unique-random-array');
module.exports = {
    all : starWarsNames,
    random : randomStarWarsNames(starWarsNames)
};