var assert = require("assert-plus"),
	i18niso = require("../index");

describe("i18n for iso 3166-1", function () {
	"use strict";
	describe("get name", function () {
		it("for de", function (done) {
			assert.string(i18niso.getName("de", "de"), "Deutschland");
			done();			
		});
		it("for cl", function (done) {
			assert.string(i18niso.getName("cl", "de"), "Chile");
			done();			
		});
		it("for CL", function (done) {
			assert.string(i18niso.getName("CL", "de"), "Chile");
			done();			
		});	
		it("for cy", function (done) {
			assert.string(i18niso.getName("cy", "de"), "Zypern");
			done();			
		});
		it("for af", function (done) {
			assert.string(i18niso.getName("af", "de"), "Afghanistan");
			done();			
		});	
	});
});
