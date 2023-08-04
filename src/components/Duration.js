
// Функция добавляющяя ноль впереди изображения часа или минуты, если они содержат только один знак
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

// Функция извлекающая из общего количества минут, отдельно часы и минуты, 
// и конвертирующая полученный результат в строку типа "Х ч  Х мин"
export const formatDuration = (totalMinutes) => {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return `${hours} ч  ${minutes} мин`;
};

// Функция извлекающая из строки вида "ХХ:ХХ", отдельно часы и минуты, 
// и конвертирующая полученный результат в строку типа "Х ч  Х мин"
export const formatDuration2 = (strTime) => {
  const hm = strTime.split(':');

  return `${Number(hm[0])} ч  ${Number(hm[1])} мин`;
};

// Функция извлекающая из строки вида "ХХXX-XX-ХХ", отдельно день, месяц, год 
// и конвертирующая полученный результат в строку
export const formatPremierData = (strData) => {
  const data = strData.split('-');
  const mounth =['января','февраля','марта','апреля','мая','июня','июля','августа',
                 'сентября','октября','ноября','декабря'];

  return `${Number(data[2])} ${mounth[data[1]-1]} ${Number(data[0])}`;
};

