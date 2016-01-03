'use strict';

var postcss = require('postcss');
var transform = require('./index');
var test = require('tape');

function transitionShrtcut(opts) {
    return postcss().use(transform(opts));
}

test('transitionShtct', function (t) {
    t.plan(1);

    t.equal( transitionShrtcut().process('div { property: all; duration: 1s; timing: ease-in-out; delay: 1s; }').css, 'div { transition: all 1s ease-in-out 1s; }', 'should merge properties together');
});