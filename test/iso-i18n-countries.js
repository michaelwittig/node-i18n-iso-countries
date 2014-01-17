var assert = require("assert-plus"),
	i18niso = require("../index");

describe("i18n for iso 3166-1", function () {
	"use strict";
	describe("de", function () {
		var lang = "de";
		describe("get name", function () {
			it("for de", function (done) {
				assert.string(i18niso.getName("de", lang), "Deutschland");
				done();
			});
			it("for cl", function (done) {
				assert.string(i18niso.getName("cl", lang), "Chile");
				done();
			});
			it("for CL", function (done) {
				assert.string(i18niso.getName("CL", lang), "Chile");
				done();
			});
			it("for cy", function (done) {
				assert.string(i18niso.getName("cy", lang), "Zypern");
				done();
			});
			it("for af", function (done) {
				assert.string(i18niso.getName("af", lang), "Afghanistan");
				done();
			});
		});
		describe("get names", function () {
			it("for de", function (done) {
				assert.equal(Object.keys(i18niso.getNames(lang)).length, 265);
				done();
			});
		});
	});
	describe("en", function () {
		var lang = "en";
		describe("get name", function () {
			it("for de", function (done) {
				assert.string(i18niso.getName("de", lang), "Germany");
				done();
			});
			it("for cl", function (done) {
				assert.string(i18niso.getName("cl", lang), "Chile");
				done();
			});
			it("for CL", function (done) {
				assert.string(i18niso.getName("CL", lang), "Chile");
				done();
			});
			it("for cy", function (done) {
				assert.string(i18niso.getName("cy", lang), "Cypris");
				done();
			});
			it("for af", function (done) {
				assert.string(i18niso.getName("af", lang), "Afghanistan");
				done();
			});
		});
		describe("get names", function () {
			it("for de", function (done) {
				assert.equal(Object.keys(i18niso.getNames(lang)).length, 239);
				done();
			});
		});
	});
	describe("unsupported language", function () {
		var lang = "unsupported";
		describe("get name", function () {
			it("for de", function (done) {
				assert.equal(i18niso.getName("de", lang), undefined);
				done();
			});
		});
		describe("get names", function () {
			it("for de", function (done) {
				assert.equal(Object.keys(i18niso.getNames(lang)).length, 0);
				done();
			});
		});
	});
});
