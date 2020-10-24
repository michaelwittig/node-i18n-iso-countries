var assert = require("assert");
var i18niso = require("../");

describe("i18n for iso 3166-1", function () {
  "use strict";
  describe("Alpha-2 to Alpha-2 code", function () {
    it("toAlpha2 SG => SG", function () {
      assert.strictEqual(i18niso.toAlpha2("SG"), "SG");
    });
  });
  describe("Alpha-2 to Alpha-3 code", function () {
    it("toAlpha3 true => undefined", function () {
      assert.strictEqual(i18niso.toAlpha3(true), undefined);
    });
    it("toAlpha3 XX => undefined", function () {
      assert.strictEqual(i18niso.toAlpha3("XX"), undefined);
    });
    it("toAlpha3 SG => SGP", function () {
      assert.strictEqual(i18niso.toAlpha3("SG"), "SGP");
    });
    it("alpha2ToAlpha3 SG => SGP", function () {
      assert.strictEqual(i18niso.alpha2ToAlpha3("SG"), "SGP");
    });
  });
  describe("Alpha-3 to Alpha-3 code", function () {
    it("toAlpha2 SGP => SGP", function () {
      assert.strictEqual(i18niso.toAlpha3("SGP"), "SGP");
    });
  });
  describe("Alpha-3 to Alpha-2 code", function () {
    it("toAlpha2 true => undefined", function () {
      assert.strictEqual(i18niso.toAlpha2(true), undefined);
    });
    it("toAlpha2 XXX => undefined", function () {
      assert.strictEqual(i18niso.toAlpha2("XXX"), undefined);
    });
    it("toAlpha2 DEU => DE", function () {
      assert.strictEqual(i18niso.toAlpha2("DEU"), "DE");
    });
    it("alpha3ToAlpha2 DEU => DE", function () {
      assert.strictEqual(i18niso.alpha3ToAlpha2("DEU"), "DE");
    });
  });
  describe("Alpha-3 to Numeric code", function () {
    it("alpha3ToNumeric SWE => 752", function () {
      assert.strictEqual(i18niso.alpha3ToNumeric("SWE"), "752");
    });
    it("alpha3ToNumeric DJI => 262", function () {
      assert.strictEqual(i18niso.alpha3ToNumeric("DJI"), "262");
    });
  });
  describe("Alpha-2 to Numeric code", function () {
    it("alpha2ToNumeric SE => 752", function () {
      assert.strictEqual(i18niso.alpha2ToNumeric("SE"), "752");
    });
    it("alpha2ToNumeric DJ => 262", function () {
      assert.strictEqual(i18niso.alpha2ToNumeric("DJ"), "262");
    });
  });
  describe("Numeric to Alpha-2 code", function () {
    it("toAlpha2 '276' => DE", function () {
      assert.strictEqual(i18niso.toAlpha2("276"), "DE");
    });
    it("toAlpha2 '004' => AF", function () {
      assert.strictEqual(i18niso.toAlpha2("004"), "AF");
    });
    it("toAlpha2 276 => DE", function () {
      assert.strictEqual(i18niso.toAlpha2(276), "DE");
    });
    it("toAlpha2 4 => AF", function () {
      assert.strictEqual(i18niso.toAlpha2(4), "AF");
    });
    it("numericToAlpha2 '276' => DE", function () {
      assert.strictEqual(i18niso.numericToAlpha2("276"), "DE");
    });
    it("numericToAlpha2 '004' => AF", function () {
      assert.strictEqual(i18niso.numericToAlpha2("004"), "AF");
    });
    it("numericToAlpha2 276 => DE", function () {
      assert.strictEqual(i18niso.numericToAlpha2(276), "DE");
    });
    it("numericToAlpha2 4 => AF", function () {
      assert.strictEqual(i18niso.numericToAlpha2(4), "AF");
    });
  });
  describe("Numeric to Alpha-3 code", function () {
    it("toAlpha3 '276' => DEU", function () {
      assert.strictEqual(i18niso.toAlpha3("276"), "DEU");
    });
    it("toAlpha3 '004' => AFG", function () {
      assert.strictEqual(i18niso.toAlpha3("004"), "AFG");
    });
    it("toAlpha3 276 => DEU", function () {
      assert.strictEqual(i18niso.toAlpha3(276), "DEU");
    });
    it("toAlpha3 4 => DEU", function () {
      assert.strictEqual(i18niso.toAlpha3(4), "AFG");
    });
    it("numericToAlpha3 '276' => DEU", function () {
      assert.strictEqual(i18niso.numericToAlpha3("276"), "DEU");
    });
    it("numericToAlpha3 '004' => AFG", function () {
      assert.strictEqual(i18niso.numericToAlpha3("004"), "AFG");
    });
    it("numericToAlpha3 276 => DEU", function () {
      assert.strictEqual(i18niso.numericToAlpha3(276), "DEU");
    });
    it("numericToAlpha3 4 => AFG", function () {
      assert.strictEqual(i18niso.numericToAlpha3(4), "AFG");
    });
  });
  describe("getAlpha2Codes", function () {
    it("length", function () {
      assert.strictEqual(Object.keys(i18niso.getAlpha2Codes()).length, 250);
    });
  });
  describe("getAlpha3Codes", function () {
    it("length", function () {
      assert.strictEqual(Object.keys(i18niso.getAlpha3Codes()).length, 250);
    });
  });
  describe("getNumericCodes", function () {
    it("length", function () {
      assert.strictEqual(Object.keys(i18niso.getNumericCodes()).length, 250);
    });
  });
  describe("getAlpha2Code", function () {
    it("missing name", function () {
      assert.strictEqual(i18niso.getAlpha2Code("XXX", "de"), undefined);
    });
    it("missing lang", function () {
      assert.strictEqual(i18niso.getAlpha2Code("Deutschland", "xx"), undefined);
    });
  });
  describe("getSimpleAlpha2Code", function () {
    it("works", function () {
      assert.strictEqual(i18niso.getSimpleAlpha2Code("belgie", "nl"), "BE");
      assert.strictEqual(i18niso.getSimpleAlpha2Code("België", "nl"), "BE");
    });
    it("missing name", function () {
      assert.strictEqual(i18niso.getSimpleAlpha2Code("XXX", "de"), undefined);
    });
    it("missing lang", function () {
      assert.strictEqual(
        i18niso.getSimpleAlpha2Code("Deutschland", "xx"),
        undefined
      );
    });
    it("alternative name spellings", function () {
      assert.strictEqual(
        i18niso.getSimpleAlpha2Code("Estados Unidos da América", "pt"),
        "US"
      );
    });
  });
  describe("getAlpha3Code", function () {
    it("missing name", function () {
      assert.strictEqual(i18niso.getAlpha3Code("XXX", "de"), undefined);
    });
    it("missing lang", function () {
      assert.strictEqual(i18niso.getAlpha3Code("Deutschland", "xx"), undefined);
    });
  });
  describe("getSimpleAlpha3Code", function () {
    it("works", function () {
      assert.strictEqual(i18niso.getSimpleAlpha3Code("belgie", "nl"), "BEL");
      assert.strictEqual(i18niso.getSimpleAlpha3Code("België", "nl"), "BEL");
    });
    it("missing name", function () {
      assert.strictEqual(i18niso.getSimpleAlpha3Code("XXX", "de"), undefined);
    });
    it("missing lang", function () {
      assert.strictEqual(
        i18niso.getSimpleAlpha3Code("Deutschland", "xx"),
        undefined
      );
    });
    it("alternative name spellings", function () {
      assert.strictEqual(
        i18niso.getSimpleAlpha3Code("Estados Unidos da América", "pt"),
        "USA"
      );
    });
  });
  describe("isValid", function () {
    it("isValid true => false", function () {
      assert.strictEqual(i18niso.isValid(true), false);
    });
    it("isValid XX => false", function () {
      assert.strictEqual(i18niso.isValid("XX"), false);
    });
    it("isValid SG => true", function () {
      assert.strictEqual(i18niso.isValid("SG"), true);
    });
    it("isValid SGP => true", function () {
      assert.strictEqual(i18niso.isValid("SGP"), true);
    });
    it("isValid 702 => true", function () {
      assert.strictEqual(i18niso.isValid(702), true);
    });
    it("isValid 999 => false", function () {
      assert.strictEqual(i18niso.isValid(999), false);
    });
    it("isValid ... => false", function () {
      assert.strictEqual(i18niso.isValid("..."), false);
    });
    it("isValid is case insensitive", function () {
      assert.strictEqual(i18niso.isValid("fra"), true);
      assert.strictEqual(i18niso.isValid("fr"), true);
    });
    it("isValid works with undefined or null", function () {
      assert.strictEqual(i18niso.isValid(undefined), false);
      assert.strictEqual(i18niso.isValid(null), false);
    });
  });
  describe("completeness", function () {
    i18niso.langs().forEach(function (lang) {
      describe(lang + " completeness", function () {
        it("complete (to less)", function () {
          Object.keys(i18niso.getAlpha2Codes()).forEach(function (code) {
            assert.notStrictEqual(
              i18niso.getName(code, lang),
              undefined,
              "missing entry for " + code
            );
          });
        });
        it("complete (too much)", function () {
          Object.keys(i18niso.getNames(lang)).forEach(function (code) {
            assert.notStrictEqual(
              i18niso.getAlpha2Codes()[code],
              void 0,
              "entry for " + code + " in lang " + lang + " is too much"
            );
          });
        });
      });
    });
  });
  describe("langs", function () {
    describe("de", function () {
      var lang = "de";
      describe("get name", function () {
        it("for de", function () {
          assert.strictEqual(i18niso.getName("de", lang), "Deutschland");
        });
        it("for cl", function () {
          assert.strictEqual(i18niso.getName("cl", lang), "Chile");
        });
        it("for CL", function () {
          assert.strictEqual(i18niso.getName("CL", lang), "Chile");
        });
        it("for cy", function () {
          assert.strictEqual(i18niso.getName("cy", lang), "Zypern");
        });
        it("for af", function () {
          assert.strictEqual(i18niso.getName("af", lang), "Afghanistan");
        });
      });
    });
    describe("en", function () {
      var lang = "en";
      describe("get Alpha-2 code", function () {
        it("nameToAlpha2 United States of America => US", function () {
          assert.strictEqual(
            i18niso.getAlpha2Code("United States of America", lang),
            "US"
          );
        });
        it("nameToAlpha2 Brazil => BR", function () {
          assert.strictEqual(i18niso.getAlpha2Code("Brazil", lang), "BR");
        });
      });
      describe("get Alpha-3 code", function () {
        it("nameToAlpha3 United States of America => USA", function () {
          assert.strictEqual(
            i18niso.getAlpha3Code("United States of America", lang),
            "USA"
          );
        });
        it("nameToAlpha3 Brazil => BRA", function () {
          assert.strictEqual(i18niso.getAlpha3Code("Brazil", lang), "BRA");
        });
      });
      describe("get name", function () {
        it("for de", function () {
          assert.strictEqual(i18niso.getName("de", lang), "Germany");
        });
        it("for cl", function () {
          assert.strictEqual(i18niso.getName("cl", lang), "Chile");
        });
        it("for CL", function () {
          assert.strictEqual(i18niso.getName("CL", lang), "Chile");
        });
        it("for cy", function () {
          assert.strictEqual(i18niso.getName("cy", lang), "Cyprus");
        });
        it("for af", function () {
          assert.strictEqual(i18niso.getName("af", lang), "Afghanistan");
        });
      });
    });
    describe("id", function () {
      var lang = "id";
      describe("get Alpha-2 code", function () {
        it("nameToAlpha2 Amerika Serika => AS", function () {
          assert.strictEqual(
            i18niso.getAlpha2Code("Amerika Serikat", lang),
            "AS"
          );
        });
        it("nameToAlpha2 Brasil => BR", function () {
          assert.strictEqual(i18niso.getAlpha2Code("Brasil", lang), "BR");
        });
      });
      describe("get Alpha-3 code", function () {
        it("nameToAlpha3 Amerika Serikat => ASM", function () {
          assert.strictEqual(
            i18niso.getAlpha3Code("Amerika Serikat", lang),
            "ASM"
          );
        });
        it("nameToAlpha3 Brasil => BRA", function () {
          assert.strictEqual(i18niso.getAlpha3Code("Brasil", lang), "BRA");
        });
      });
      describe("get name", function () {
        it("for de", function () {
          assert.strictEqual(i18niso.getName("de", lang), "Jerman");
        });
        it("for cl", function () {
          assert.strictEqual(i18niso.getName("cl", lang), "Chile");
        });
        it("for CL", function () {
          assert.strictEqual(i18niso.getName("CL", lang), "Chile");
        });
        it("for cy", function () {
          assert.strictEqual(i18niso.getName("cy", lang), "Siprus");
        });
        it("for af", function () {
          assert.strictEqual(i18niso.getName("af", lang), "Afghanistan");
        });
      });
    });
    describe("pl", function () {
      var lang = "pl";
      describe("get Alpha-2 code", function () {
        it("nameToAlpha2 Brazylia => BR", function () {
          assert.strictEqual(i18niso.getAlpha2Code("Brazylia", lang), "BR");
        });
        it("nameToAlpha2 Stany Zjednoczone => US", function () {
          assert.strictEqual(
            i18niso.getAlpha2Code("Stany Zjednoczone", lang),
            "US"
          );
        });
      });
      describe("get Alpha-3 code", function () {
        it("nameToAlpha3 Brazylia => BRA", function () {
          assert.strictEqual(i18niso.getAlpha3Code("Brazylia", lang), "BRA");
        });
        it("nameToAlpha3 Stany Zjednoczone => USA", function () {
          assert.strictEqual(
            i18niso.getAlpha3Code("Stany Zjednoczone", lang),
            "USA"
          );
        });
      });
      describe("get name", function () {
        it("for af => Afganistan", function () {
          assert.strictEqual(i18niso.getName("af", lang), "Afganistan");
        });
        it("for ba => Bośnia i Hercegowina", function () {
          assert.strictEqual(
            i18niso.getName("ba", lang),
            "Bośnia i Hercegowina"
          );
        });
        it("for cn => Chiny", function () {
          assert.strictEqual(i18niso.getName("cn", lang), "Chiny");
        });
        it("for cy => Cypr", function () {
          assert.strictEqual(i18niso.getName("cy", lang), "Cypr");
        });
        it("for de => Niemcy", function () {
          assert.strictEqual(i18niso.getName("de", lang), "Niemcy");
        });
      });
    });
    describe("el", function () {
      var lang = "el";
      describe("get Alpha-2 code", function () {
        it("nameToAlpha2 'Βραζιλία' => BR", function () {
          assert.strictEqual(i18niso.getAlpha2Code("Βραζιλία", lang), "BR");
        });
        it("nameToAlpha2 'Ηνωμένες Πολιτείες Αμερικής' => US", function () {
          assert.strictEqual(
            i18niso.getAlpha2Code("Ηνωμένες Πολιτείες Αμερικής", lang),
            "US"
          );
        });
      });
      describe("get Alpha-3 code", function () {
        it("nameToAlpha3 'Βραζιλία' => BRA", function () {
          assert.strictEqual(i18niso.getAlpha3Code("Βραζιλία", lang), "BRA");
        });
        it("nameToAlpha3 'Ηνωμένες Πολιτείες Αμερικής' => USA", function () {
          assert.strictEqual(
            i18niso.getAlpha3Code("Ηνωμένες Πολιτείες Αμερικής", lang),
            "USA"
          );
        });
      });
      describe("get name", function () {
        it("for af => Αφγανιστάν", function () {
          assert.strictEqual(i18niso.getName("af", lang), "Αφγανιστάν");
        });
        it("for ba => Βοσνία και Ερζεγοβίνη", function () {
          assert.strictEqual(
            i18niso.getName("ba", lang),
            "Βοσνία και Ερζεγοβίνη"
          );
        });
        it("for cn => Κίνα", function () {
          assert.strictEqual(i18niso.getName("cn", lang), "Κίνα");
        });
        it("for cy => Κύπρος", function () {
          assert.strictEqual(i18niso.getName("cy", lang), "Κύπρος");
        });
        it("for de => Γερμανία", function () {
          assert.strictEqual(i18niso.getName("de", lang), "Γερμανία");
        });
      });
    });
    describe("fr", function () {
      var lang = "fr";
      describe("get name", function () {
        it("for fr => France", function () {
          assert.strictEqual(i18niso.getName("fr", lang), "France");
        });
      });
    });
    describe("pt", function () {
      var lang = "pt";
      describe("get Alpha-2 code", function () {
        it("nameToAlpha2 Estados Unidos => US", function () {
          assert.strictEqual(
            i18niso.getAlpha2Code("Estados Unidos", lang),
            "US"
          );
        });
        it("nameToAlpha2 Estados Unidos da América => US", function () {
          assert.strictEqual(
            i18niso.getAlpha2Code("Estados Unidos da América", lang),
            "US"
          );
        });
      });
      describe("get Alpha-3 code", function () {
        it("nameToAlpha3 Estados Unidos => USA", function () {
          assert.strictEqual(
            i18niso.getAlpha3Code("Estados Unidos", lang),
            "USA"
          );
        });
        it("nameToAlpha3 Estados Unidos da América => USA", function () {
          assert.strictEqual(
            i18niso.getAlpha3Code("Estados Unidos da América", lang),
            "USA"
          );
        });
      });
      describe("get name", function () {
        it("for br => Brasil", function () {
          assert.strictEqual(i18niso.getName("br", lang), "Brasil");
        });
        it("for us => Estados Unidos", function () {
          assert.strictEqual(i18niso.getName("us", lang), "Estados Unidos");
        });
      });
    });
    describe("vi", function () {
      var lang = "vi";
      describe("get name", function () {
        it("for eg => Ai Cập", function () {
          assert.strictEqual(i18niso.getName("eg", lang), "Ai Cập");
        });
        it("for eg (official name) => Ai Cập", function () {
          assert.strictEqual(
            i18niso.getName("eg", lang, {
              select: "official",
            }),
            "Ai Cập"
          );
        });
        it("for ru (alias) => Nga", function () {
          assert.strictEqual(
            i18niso.getName("ru", lang, {
              select: "alias",
            }),
            "Nga"
          );
        });
        it('for us (all available names) => ["Hợp chủng quốc Hoa Kỳ", "Mỹ"]', function () {
          assert.deepStrictEqual(
            i18niso.getName("us", lang, {
              select: "all",
            }),
            ["Hợp chủng quốc Hoa Kỳ", "Mỹ"]
          );
        });
      });
    });
    describe("unsupported language", function () {
      var lang = "unsupported";
      it("get name => undefined", function () {
        assert.strictEqual(i18niso.getName("de", lang), undefined);
      });
      it("get names => array.length == 0", function () {
        assert.strictEqual(Object.keys(i18niso.getNames(lang)).length, 0);
      });
    });
  });
});
