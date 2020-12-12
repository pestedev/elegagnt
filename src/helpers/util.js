export function commafy(number, delimiterChar = ',') {
  if (isNaN(number)) {
    return number;
  }
  const str = number.toString().split('.');
  if (str[0].length >= 4) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1' + delimiterChar);
  }
  if (str[1] && str[1].length >= 4) {
    str[1] = str[1].replace(/(\d{3})/g, '$1 ');
  }
  return str.join('.');
}
function bytesToSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) {
    return 'n/a';
  }
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  if (i === 0) {
    return `${bytes} ${sizes[i]})`;
  }
  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
}

function arrayMove(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    let k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing
}

const months = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند',
];
function getDateWithPersianMonth(date) {
  var y = date.substr(0, 4);
  var m = parseInt(date.substr(6, 2));
  var d = parseInt(date.substr(8, 2));

  return d + ' ' + months[m - 1] + ' ' + y;
}
export default {
  commafy,
  bytesToSize,
  arrayMove,
  getDateWithPersianMonth,
};
