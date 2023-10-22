import { parseAbbreviations } from 'src/utils/miscelaneousUtils';

import { CIS_COMMON_ABBREVIATION_LIST } from '../constants/miscelaneousConstants';

export const parseCISAbbreviations = (string: string) =>
  parseAbbreviations({
    string,
    abbreviationList: CIS_COMMON_ABBREVIATION_LIST
  });
