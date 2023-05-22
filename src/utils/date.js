/*
 ** 时间戳转换成指定格式日期
 ** eg.
 ** dateFormat(11111111111111, 'Y年m月d日 H时i分')
 ** → "2322年02月06日 03时45分"
 */
export const dateFormat = (timestamp, formats) => {
  // formats格式包括
  // 1. Y-m-d
  // 2. Y-m-d H:i:s
  // 3. Y年m月d日
  // 4. Y年m月d日 H时i分
  formats = formats || 'Y-m-d';

  const zero = function (value) {
    if (value < 10) {
      return '0' + value;
    }
    return value;
  };

  const myDate = timestamp ? new Date(timestamp) : new Date();

  const year = myDate.getFullYear();
  const month = zero(myDate.getMonth() + 1);
  const day = zero(myDate.getDate());

  const hour = zero(myDate.getHours());
  const minite = zero(myDate.getMinutes());
  const second = zero(myDate.getSeconds());

  return formats.replace(/Y|m|d|H|i|s/gi, function (matches) {
    return {
      Y: year,
      m: month,
      d: day,
      H: hour,
      i: minite,
      s: second,
    }[matches];
  });
};
