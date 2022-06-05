import { registerLocale } from "./lib.js";

import { LocaleAF } from "./langs/af.js";
import { LocaleAM } from "./langs/am.js";
import { LocaleAR } from "./langs/ar.js";
import { LocaleAZ } from "./langs/az.js";
import { LocaleBE } from "./langs/be.js";
import { LocaleBG } from "./langs/bg.js";
import { LocaleBN } from "./langs/bn.js";
import { LocaleBS } from "./langs/bs.js";
import { LocaleCA } from "./langs/ca.js";
import { LocaleCS } from "./langs/cs.js";
import { LocaleDA } from "./langs/da.js";
import { LocaleDE } from "./langs/de.js";
import { LocaleDV } from "./langs/dv.js";
import { LocaleEL } from "./langs/el.js";
import { LocaleEN } from "./langs/en.js";
import { LocaleES } from "./langs/es.js";
import { LocaleET } from "./langs/et.js";
import { LocaleEU } from "./langs/eu.js";
import { LocaleFA } from "./langs/fa.js";
import { LocaleFI } from "./langs/fi.js";
import { LocaleFR } from "./langs/fr.js";
import { LocaleGL } from "./langs/gl.js";
import { LocaleHA } from "./langs/ha.js";
import { LocaleHE } from "./langs/he.js";
import { LocaleHI } from "./langs/hi.js";
import { LocaleHR } from "./langs/hr.js";
import { LocaleHU } from "./langs/hu.js";
import { LocaleHY } from "./langs/hy.js";
import { LocaleID } from "./langs/id.js";
import { LocaleIS } from "./langs/is.js";
import { LocaleIT } from "./langs/it.js";
import { LocaleJA } from "./langs/ja.js";
import { LocaleKA } from "./langs/ka.js";
import { LocaleKK } from "./langs/kk.js";
import { LocaleKO } from "./langs/ko.js";
import { LocaleKU } from "./langs/ku.js";
import { LocaleKY } from "./langs/ky.js";
import { LocaleLT } from "./langs/lt.js";
import { LocaleLV } from "./langs/lv.js";
import { LocaleMK } from "./langs/mk.js";
import { LocaleML } from "./langs/ml.js";
import { LocaleMN } from "./langs/mn.js";
import { LocaleMS } from "./langs/ms.js";
import { LocaleNB } from "./langs/nb.js";
import { LocaleNL } from "./langs/nl.js";
import { LocaleNN } from "./langs/nn.js";
import { LocaleNO } from "./langs/no.js";
import { LocalePL } from "./langs/pl.js";
import { LocalePS } from "./langs/ps.js";
import { LocalePT } from "./langs/pt.js";
import { LocaleRO } from "./langs/ro.js";
import { LocaleRU } from "./langs/ru.js";
import { LocaleSD } from "./langs/sd.js";
import { LocaleSK } from "./langs/sk.js";
import { LocaleSL } from "./langs/sl.js";
import { LocaleSO } from "./langs/so.js";
import { LocaleSQ } from "./langs/sq.js";
import { LocaleSR } from "./langs/sr.js";
import { LocaleSV } from "./langs/sv.js";
import { LocaleSW } from "./langs/sw.js";
import { LocaleTA } from "./langs/ta.js";
import { LocaleTG } from "./langs/tg.js";
import { LocaleTH } from "./langs/th.js";
import { LocaleTR } from "./langs/tr.js";
import { LocaleTT } from "./langs/tt.js";
import { LocaleUG } from "./langs/ug.js";
import { LocaleUK } from "./langs/uk.js";
import { LocaleUR } from "./langs/ur.js";
import { LocaleUZ } from "./langs/uz.js";
import { LocaleVI } from "./langs/vi.js";
import { LocaleZH } from "./langs/zh.js";

const locales = [
  LocaleAF,
  LocaleAM,
  LocaleAR,
  LocaleAZ,
  LocaleBE,
  LocaleBG,
  LocaleBN,
  LocaleBS,
  LocaleCA,
  LocaleCS,
  LocaleDA,
  LocaleDE,
  LocaleDV,
  LocaleEL,
  LocaleEN,
  LocaleES,
  LocaleET,
  LocaleEU,
  LocaleFA,
  LocaleFI,
  LocaleFR,
  LocaleGL,
  LocaleHA,
  LocaleHE,
  LocaleHI,
  LocaleHR,
  LocaleHU,
  LocaleHY,
  LocaleID,
  LocaleIS,
  LocaleIT,
  LocaleJA,
  LocaleKA,
  LocaleKK,
  LocaleKO,
  LocaleKU,
  LocaleKY,
  LocaleLT,
  LocaleLV,
  LocaleMK,
  LocaleML,
  LocaleMN,
  LocaleMS,
  LocaleNB,
  LocaleNL,
  LocaleNN,
  LocaleNO,
  LocalePL,
  LocalePS,
  LocalePT,
  LocaleRO,
  LocaleRU,
  LocaleSD,
  LocaleSK,
  LocaleSL,
  LocaleSO,
  LocaleSQ,
  LocaleSR,
  LocaleSV,
  LocaleSW,
  LocaleTA,
  LocaleTG,
  LocaleTH,
  LocaleTR,
  LocaleTT,
  LocaleUG,
  LocaleUK,
  LocaleUR,
  LocaleUZ,
  LocaleVI,
  LocaleZH,
] as const;

for (let i = 0; i < locales.length; i++) {
  registerLocale(locales[i]);
}

export * as library from "./lib.js";
