var assert = require("assert-plus"),
  i18niso = require("../");

describe("i18n for iso 3166-1", function () {
  "use strict";
  describe("Alpha-2 to Alpha-2 code", function() {
    it("toAlpha2 SG => SG", function() {
      assert.equal(i18niso.toAlpha2("SG"), "SG");
    });
  });
  describe("Alpha-2 to Alpha-3 code", function() {
    it("toAlpha3 true => undefined", function() {
      assert.equal(i18niso.toAlpha3(true), undefined);
    });
    it("toAlpha3 XX => undefined", function() {
      assert.equal(i18niso.toAlpha3("XX"), undefined);
    });
    it("toAlpha3 SG => SGP", function() {
      assert.equal(i18niso.toAlpha3("SG"), "SGP");
    });
    it("alpha2ToAlpha3 SG => SGP", function() {
      assert.equal(i18niso.alpha2ToAlpha3("SG"), "SGP");
    });
  });
  describe("Alpha-3 to Alpha-3 code", function() {
    it("toAlpha2 SGP => SGP", function() {
      assert.equal(i18niso.toAlpha3("SGP"), "SGP");
    });
  });
  describe("Alpha-3 to Alpha-2 code", function() {
    it("toAlpha2 true => undefined", function() {
      assert.equal(i18niso.toAlpha2(true), undefined);
    });
    it("toAlpha2 XXX => undefined", function() {
      assert.equal(i18niso.toAlpha2("XXX"), undefined);
    });
    it("toAlpha2 DEU => DE", function() {
      assert.equal(i18niso.toAlpha2("DEU"), "DE");
    });
    it("alpha3ToAlpha2 DEU => DE", function() {
      assert.equal(i18niso.alpha3ToAlpha2("DEU"), "DE");
    });
  });
  describe("Alpha-3 to Numeric code", function() {
    it("alpha3ToNumeric SWE => 752", function() {
      assert.equal(i18niso.alpha3ToNumeric("SWE"), 752);
    });
    it("alpha3ToNumeric DJI => 262", function() {
      assert.equal(i18niso.alpha3ToNumeric("DJI"), 262);
    });
  });
  describe("Alpha-2 to Numeric code", function() {
    it("alpha2ToNumeric SE => 752", function() {
      assert.equal(i18niso.alpha2ToNumeric("SE"), 752);
    });
    it("alpha2ToNumeric DJ => 262", function() {
      assert.equal(i18niso.alpha2ToNumeric("DJ"), 262);
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
    it("toAlpha2 4 => AF", function() {
      assert.equal(i18niso.toAlpha2(4), "AF");
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
    it("numericToAlpha2 4 => AF", function() {
      assert.equal(i18niso.numericToAlpha2(4), "AF");
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
    it("toAlpha3 4 => DEU", function() {
      assert.equal(i18niso.toAlpha3(4), "AFG");
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
    it("numericToAlpha3 4 => AFG", function() {
      assert.equal(i18niso.numericToAlpha3(4), "AFG");
    });
  });
  describe("getAlpha2Codes", function() {
    it("length", function() {
      assert.equal(Object.keys(i18niso.getAlpha2Codes()).length, 250);
    });
  });
  describe("getAlpha3Codes", function() {
    it("length", function() {
      assert.equal(Object.keys(i18niso.getAlpha3Codes()).length, 250);
    });
  });
  describe("getNumericCodes", function() {
    it("length", function() {
      assert.equal(Object.keys(i18niso.getNumericCodes()).length, 250);
    });
  });
  describe("getAlpha2Code", function() {
    it("missing name", function() {
      assert.equal(i18niso.getAlpha2Code("XXX", "de"), undefined);
    });
    it("missing land", function() {
      assert.equal(i18niso.getAlpha2Code("Deutschland", "xx"), undefined);
    });
  });
  describe("getAlpha3Code", function() {
    it("missing name", function() {
      assert.equal(i18niso.getAlpha3Code("XXX", "de"), undefined);
    });
    it("missing land", function() {
      assert.equal(i18niso.getAlpha3Code("Deutschland", "xx"), undefined);
    });
  });
  describe("isValid", function() {
    it("isValid true => false", function() {
      assert.equal(i18niso.isValid(true), false);
    });
    it("isValid XX => false", function() {
      assert.equal(i18niso.isValid("XX"), false);
    });
    it("isValid SG => true", function() {
      assert.equal(i18niso.isValid("SG"), true);
    });
    it("isValid SGP => true", function() {
      assert.equal(i18niso.isValid("SGP"), true);
    });
    it("isValid 702 => true", function() {
      assert.equal(i18niso.isValid(702), true);
    });
    it("isValid 999 => false", function() {
      assert.equal(i18niso.isValid(999), false);
    });
    it("isValid ... => false", function() {
      assert.equal(i18niso.isValid('...'), false);
    });
    it("isValid is case insensitive", function() {
      assert.equal(i18niso.isValid('fra'), true);
      assert.equal(i18niso.isValid('fr'), true);
    });
    it("isValid works with undefined or null", function() {
      assert.equal(i18niso.isValid(undefined), false);
      assert.equal(i18niso.isValid(null), false);
    });
  });
  describe("completeness", function () {
    i18niso.langs().forEach(function(lang) {
      describe(lang + " completeness", function () {
        it("complete (to less)", function() {
          Object.keys(i18niso.getAlpha2Codes()).forEach(function(code) {
            assert.notEqual(i18niso.getName(code, lang), undefined, "missing entry for " + code);
          });
        });
        it("complete (too much)", function() {
          Object.keys(i18niso.getNames(lang)).forEach(function(code) {
            assert.notStrictEqual(i18niso.getAlpha2Codes()[code], void 0, "entry for " + code + " in lang " + lang + " is too much");
          });
        });
      });
    });
  });
  describe("langs", function() {
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
    });
    describe("en", function () {
      var lang = "en";
      describe("get Alpha-2 code", function() {
        it("nameToAlpha2 United States of America => US", function() {
          assert.equal(i18niso.getAlpha2Code("United States of America", lang), "US");
        });
        it("nameToAlpha2 Brazil => BR", function() {
          assert.equal(i18niso.getAlpha2Code("Brazil", lang), "BR");
        });
      });
      describe("get Alpha-3 code", function() {
        it("nameToAlpha3 United States of America => USA", function() {
          assert.equal(i18niso.getAlpha3Code("United States of America", lang), "USA");
        });
        it("nameToAlpha3 Brazil => BRA", function() {
          assert.equal(i18niso.getAlpha3Code("Brazil", lang), "BRA");
        });
      });
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
    });

    describe("id", function () {
        var lang = "id";
        describe("get Alpha-2 code", function() {
            it("nameToAlpha2 Amerika Serika => AS", function() {
                assert.equal(i18niso.getAlpha2Code("Amerika Serikat", lang), "AS");
            });
            it("nameToAlpha2 Brasil => BR", function() {
                assert.equal(i18niso.getAlpha2Code("Brasil", lang), "BR");
            });
        });
        describe("get Alpha-3 code", function() {
            it("nameToAlpha3 Amerika Serikat => ASM", function() {
                assert.equal(i18niso.getAlpha3Code("Amerika Serikat", lang), "ASM");
            });
            it("nameToAlpha3 Brasil => BRA", function() {
                assert.equal(i18niso.getAlpha3Code("Brasil", lang), "BRA");
            });
        });
        describe("get name", function () {
            it("for de", function () {
                assert.equal(i18niso.getName("de", lang), "Jerman");
            });
            it("for cl", function () {
                assert.equal(i18niso.getName("cl", lang), "Chile");
            });
            it("for CL", function () {
                assert.equal(i18niso.getName("CL", lang), "Chile");
            });
            it("for cy", function () {
                assert.equal(i18niso.getName("cy", lang), "Siprus");
            });
            it("for af", function () {
                assert.equal(i18niso.getName("af", lang), "Afghanistan");
            });
        });
    });

    describe("pl", function () {
      var lang = "pl";
      describe("get Alpha-2 code", function() {
        it("nameToAlpha2 Brazylia => BR", function() {
          assert.equal(i18niso.getAlpha2Code("Brazylia", lang), "BR");
        });
        it("nameToAlpha2 Stany Zjednoczone => US", function() {
          assert.equal(i18niso.getAlpha2Code("Stany Zjednoczone", lang), "US");
        });
      });
      describe("get Alpha-3 code", function() {
        it("nameToAlpha3 Brazylia => BRA", function() {
          assert.equal(i18niso.getAlpha3Code("Brazylia", lang), "BRA");
        });
        it("nameToAlpha3 Stany Zjednoczone => USA", function() {
          assert.equal(i18niso.getAlpha3Code("Stany Zjednoczone", lang), "USA");
        });
      });
      describe("get name", function () {
        it("for af => Afganistan", function () {
          assert.equal(i18niso.getName("af", lang), "Afganistan");
        });
        it("for ba => Bośnia i Hercegowina", function () {
          assert.equal(i18niso.getName("ba", lang), "Bośnia i Hercegowina");
        });
        it("for cn => Chiny", function () {
          assert.equal(i18niso.getName("cn", lang), "Chiny");
        });
        it("for cy => Cypr", function () {
          assert.equal(i18niso.getName("cy", lang), "Cypr");
        });
        it("for de => Niemcy", function () {
          assert.equal(i18niso.getName("de", lang), "Niemcy");
        });
      });
    });
    describe("el", function () {
      var lang = "el";
      describe("get Alpha-2 code", function() {
        it("nameToAlpha2 'Βραζιλία' => BR", function() {
          assert.equal(i18niso.getAlpha2Code("Βραζιλία", lang), "BR");
        });
        it("nameToAlpha2 'Ηνωμένες Πολιτείες Αμερικής' => US", function() {
          assert.equal(i18niso.getAlpha2Code("Ηνωμένες Πολιτείες Αμερικής", lang), "US");
        });
      });
      describe("get Alpha-3 code", function() {
        it("nameToAlpha3 'Βραζιλία' => BRA", function() {
          assert.equal(i18niso.getAlpha3Code("Βραζιλία", lang), "BRA");
        });
        it("nameToAlpha3 'Ηνωμένες Πολιτείες Αμερικής' => USA", function() {
          assert.equal(i18niso.getAlpha3Code("Ηνωμένες Πολιτείες Αμερικής", lang), "USA");
        });
      });
      describe("get name", function () {
        it("for af => Αφγανιστάν", function () {
          assert.equal(i18niso.getName("af", lang), "Αφγανιστάν");
        });
        it("for ba => Βοσνία και Ερζεγοβίνη", function () {
          assert.equal(i18niso.getName("ba", lang), "Βοσνία και Ερζεγοβίνη");
        });
        it("for cn => Κίνα", function () {
          assert.equal(i18niso.getName("cn", lang), "Κίνα");
        });
        it("for cy => Κύπρος", function () {
          assert.equal(i18niso.getName("cy", lang), "Κύπρος");
        });
        it("for de => Γερμανία", function () {
          assert.equal(i18niso.getName("de", lang), "Γερμανία");
        });
      });
    });
    describe("fr", function () {
      var lang = "fr";
      describe("get name", function () {
        it("for fr => France", function () {
          assert.equal(i18niso.getName("fr", lang), "France");
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
});
