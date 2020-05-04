import countries from '../data/countries.json';
import { mapObjIndexed } from 'ramda';
const groupOptionsPhone = (value, key) => {
  return {
    label: key,
    options: value.map((v) => {
      return {
        label: `${v.country} (+${v.calling_code})`,
        value: `+${v.calling_code}`,
      };
    }),
  };
};
const groupedOptionsPhonePrep = mapObjIndexed(groupOptionsPhone, countries);
export const groupedPhoneCodes = Object.entries(groupedOptionsPhonePrep).map((a) => a[1]);
