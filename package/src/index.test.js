'use strict';

let expect = require('chai').expect;
let randomNames = require('.');

describe('random-names', ()=>{

    it('gets me list of all available names', ()=>{
        expect(isArrayOfStrings(randomNames.all)).to.be.true
    })

    it('gets me a randome name', ()=>{
        expect(randomNames.random()).to.satisfy(isIncluded(randomNames.all))
    })
});

function isArrayOfStrings(arr){
    return arr.every(function(item){
        return typeof item === 'string'
    })
}

function isIncluded(arr){
    return function(item){
        return arr.includes(item);
    }
}