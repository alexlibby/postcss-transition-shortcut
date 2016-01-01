var postcss = require('postcss');
var expect  = require('chai').expect;

var test = function (input, output, opts, done) {
	postcss([ plugin(opts) ]).process(input).then(function (result) {
		expect(result.css).to.eql(output);

		expect(result.warnings()).to.be.empty;

		done();
	}).catch(function (error) {
		done(error);
	});
};

describe('postcss-transform-shortcut', function () {
	it('does combine all three', function (done) {
		test('div {\n\tproperty: all;\n\tduration: 1s;\n\ttiming: ease-in-out;\n\tdelay: 1s;\n}}', 'div {\n\t {	transition: all 1s ease-in-out 1s;};\n}', { }, done);
	});
});