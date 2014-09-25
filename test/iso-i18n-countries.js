var assert = require("assert-plus"),
	i18niso = require("../index");

describe("i18n for iso 3166-1", function () {
	"use strict";
	describe("Alpha-2 to Alpha-3 code", function() {
		it("toAlpha3 SG => SGP", function() {
			assert.equal(i18niso.toAlpha3("SG"), "SGP");
		});
		it("alpha2ToAlpha3 SG => SGP", function() {
			assert.equal(i18niso.alpha2ToAlpha3("SG"), "SGP");
		});
	});
	describe("Alpha-3 to Alpha-2 code", function() {
		it("toAlpha2 DEU => DE", function() {
			assert.equal(i18niso.toAlpha2("DEU"), "DE");
		});
		it("alpha3ToAlpha2 DEU => DE", function() {
			assert.equal(i18niso.alpha3ToAlpha2("DEU"), "DE");
		});
	});
	describe("Numeric to Alpha-2 code", function() {
		it("toAlpha2 '276' => DE", function() {
			assert.equal(i18niso.toAlpha2("276"), "DE");
		});
		it("toAlpha2 '004' => AF", function() {
			assert.equal(i18niso.toAlpha2("004"), "AF");
		});
		it("toAlpha2 276 => DE", function() {
			assert.equal(i18niso.toAlpha2(276), "DE");
		});
		it("numericToAlpha2 '276' => DE", function() {
			assert.equal(i18niso.numericToAlpha2("276"), "DE");
		});
		it("numericToAlpha2 '004' => AF", function() {
			assert.equal(i18niso.numericToAlpha2("004"), "AF");
		});
		it("numericToAlpha2 276 => DE", function() {
			assert.equal(i18niso.numericToAlpha2(276), "DE");
		});
	});
	describe("Numeric to Alpha-3 code", function() {
		it("toAlpha3 '276' => DEU", function() {
			assert.equal(i18niso.toAlpha3("276"), "DEU");
		});
		it("toAlpha3 '004' => AFG", function() {
			assert.equal(i18niso.toAlpha3("004"), "AFG");
		});
		it("toAlpha3 276 => DEU", function() {
			assert.equal(i18niso.toAlpha3(276), "DEU");
		});
		it("numericToAlpha3 '276' => DEU", function() {
			assert.equal(i18niso.numericToAlpha3("276"), "DEU");
		});
		it("numericToAlpha3 '004' => AFG", function() {
			assert.equal(i18niso.numericToAlpha3("004"), "AFG");
		});
		it("numericToAlpha3 276 => DEU", function() {
			assert.equal(i18niso.numericToAlpha3(276), "DEU");
		});
	});
	describe("de", function () {
		var lang = "de";
		describe("get name", function () {
			it("for de", function () {
				assert.equal(i18niso.getName("de", lang), "Deutschland");
			});
			it("for cl", function () {
				assert.equal(i18niso.getName("cl", lang), "Chile");
			});
			it("for CL", function () {
				assert.equal(i18niso.getName("CL", lang), "Chile");
			});
			it("for cy", function () {
				assert.equal(i18niso.getName("cy", lang), "Zypern");
			});
			it("for af", function () {
				assert.equal(i18niso.getName("af", lang), "Afghanistan");
			});
		});
		it("complete (to less)", function() {
			Object.keys(i18niso.getAlpha2Codes()).forEach(function(code) {
				assert.notEqual(i18niso.getName(code, lang), undefined, "missing entry for " + code);
			});
		});
		it("complete (too much)", function() {
			Object.keys(i18niso.getNames(lang)).forEach(function(code) {
				assert.notEqual(i18niso.getAlpha2Codes()[code], -1, "entry for " + code + " is too much");
			});
		});
	});
	describe("en", function () {
		var lang = "en";
		describe("get name", function () {
			it("for de", function () {
				assert.equal(i18niso.getName("de", lang), "Germany");
			});
			it("for cl", function () {
				assert.equal(i18niso.getName("cl", lang), "Chile");
			});
			it("for CL", function () {
				assert.equal(i18niso.getName("CL", lang), "Chile");
			});
			it("for cy", function () {
				assert.equal(i18niso.getName("cy", lang), "Cyprus");
			});
			it("for af", function () {
				assert.equal(i18niso.getName("af", lang), "Afghanistan");
			});
		});
		it("complete (to less)", function() {
			Object.keys(i18niso.getAlpha2Codes()).forEach(function(code) {
				assert.notEqual(i18niso.getName(code, lang), undefined, "missing entry for " + code);
			});
		});
		it("complete (too much)", function() {
			Object.keys(i18niso.getNames(lang)).forEach(function(code) {
				assert.notEqual(i18niso.getAlpha2Codes()[code], -1, "entry for " + code + " is too much");
			});
		});
	});
	describe("nl", function () {
		var lang = "nl";
		it("complete (to less)", function() {
			Object.keys(i18niso.getAlpha2Codes()).forEach(function(code) {
				assert.notEqual(i18niso.getName(code, lang), undefined, "missing entry for " + code);
			});
		});
		it("complete (too much)", function() {
			Object.keys(i18niso.getNames(lang)).forEach(function(code) {
				assert.notEqual(i18niso.getAlpha2Codes()[code], -1, "entry for " + code + " is too much");
			});
		});
	});
	describe("fr", function () {
		var lang = "fr";
		it("complete (to less)", function() {
			Object.keys(i18niso.getAlpha2Codes()).forEach(function(code) {
				assert.notEqual(i18niso.getName(code, lang), undefined, "missing entry for " + code);
			});
		});
		it("complete (too much)", function() {
			Object.keys(i18niso.getNames(lang)).forEach(function(code) {
				assert.notEqual(i18niso.getAlpha2Codes()[code], -1, "entry for " + code + " is too much");
			});
		});
	});
	describe("unsupported language", function () {
		var lang = "unsupported";
		it("get name", function () {
			assert.equal(i18niso.getName("de", lang), undefined);
		});
		it("get names", function () {
			assert.equal(Object.keys(i18niso.getNames(lang)).length, 0);
		});
	});
});
