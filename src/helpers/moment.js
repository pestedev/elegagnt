// if You Have Moment.js
import moment from 'moment-jalaali';
export const m = (date, format = 'jYYYY/jM/jD') => moment(date, format);
export const JdateToEng = (date) =>
  moment(date, 'jYYYY/jMM/jDD').format('YYYY/MM/DD');
export const EngdateToJ = (date = Date.now()) => {
  const _date = moment(date, 'YYYY/MM/DD');
  if (_date.isValid()) {
    return _date.format('jYYYY/jMM/jDD');
  }
};
export default moment;
