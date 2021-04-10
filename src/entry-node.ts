import { registerLocale } from './lib';

import { LocaleAF } from './langs/af';
import { LocaleAM } from './langs/am';
import { LocaleAR } from './langs/ar';
import { LocaleAZ } from './langs/az';
import { LocaleBE } from './langs/be';
import { LocaleBG } from './langs/bg';
import { LocaleBN } from './langs/bn';
import { LocaleBS } from './langs/bs';
import { LocaleCA } from './langs/ca';
import { LocaleCS } from './langs/cs';
import { LocaleDA } from './langs/da';
import { LocaleDE } from './langs/de';
import { LocaleEL } from './langs/el';
import { LocaleEN } from './langs/en';
import { LocaleES } from './langs/es';
import { LocaleET } from './langs/et';
import { LocaleEU } from './langs/eu';
import { LocaleFA } from './langs/fa';
import { LocaleFI } from './langs/fi';
import { LocaleFR } from './langs/fr';
import { LocaleGL } from './langs/gl';
import { LocaleHA } from './langs/ha';
import { LocaleHE } from './langs/he';
import { LocaleHI } from './langs/hi';
import { LocaleHR } from './langs/hr';
import { LocaleHU } from './langs/hu';
import { LocaleHY } from './langs/hy';
import { LocaleID } from './langs/id';
import { LocaleIS } from './langs/is';
import { LocaleIT } from './langs/it';
import { LocaleJA } from './langs/ja';
import { LocaleKA } from './langs/ka';
import { LocaleKK } from './langs/kk';
import { LocaleKO } from './langs/ko';
import { LocaleKU } from './langs/ku';
import { LocaleKY } from './langs/ky';
import { LocaleLT } from './langs/lt';
import { LocaleLV } from './langs/lv';
import { LocaleMK } from './langs/mk';
import { LocaleML } from './langs/ml';
import { LocaleMN } from './langs/mn';
import { LocaleMS } from './langs/ms';
import { LocaleNB } from './langs/nb';
import { LocaleNL } from './langs/nl';
import { LocaleNN } from './langs/nn';
import { LocaleNO } from './langs/no';
import { LocalePL } from './langs/pl';
import { LocalePS } from './langs/ps';
import { LocalePT } from './langs/pt';
import { LocaleRO } from './langs/ro';
import { LocaleRU } from './langs/ru';
import { LocaleSD } from './langs/sd';
import { LocaleSK } from './langs/sk';
import { LocaleSL } from './langs/sl';
import { LocaleSO } from './langs/so';
import { LocaleSQ } from './langs/sq';
import { LocaleSR } from './langs/sr';
import { LocaleSV } from './langs/sv';
import { LocaleTA } from './langs/ta';
import { LocaleTG } from './langs/tg';
import { LocaleTH } from './langs/th';
import { LocaleTR } from './langs/tr';
import { LocaleTT } from './langs/tt';
import { LocaleUG } from './langs/ug';
import { LocaleUK } from './langs/uk';
import { LocaleUR } from './langs/ur';
import { LocaleUZ } from './langs/uz';
import { LocaleVI } from './langs/vi';
import { LocaleZH } from './langs/zh';

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

export * as library from './lib';
