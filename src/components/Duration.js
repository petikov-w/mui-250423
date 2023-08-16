
// Функция добавляющяя ноль впереди изображения часа или минуты, если они содержат только один знак
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

// Функция форматирующая строку продолжительности фильма
export const formatDuration = (value) => {
 
  if (typeof(value) === 'number') {
    // Извлекаем из общего количества минут, отдельно часы и минуты, 
    // и конвертируем полученный результат в строку типа "Х ч  Х мин"
    const minutes = value % 60;
    const hours = Math.floor(value / 60);  
    
    return (hours === 0 ? `${minutes} мин` : `${hours} ч  ${minutes} мин`);
  }

  if (typeof(value) === 'string') {
    // Извлекаем из строки вида "ХХ:ХХ", отдельно часы и минуты, 
    // и конвертируем полученный результат в строку типа "Х ч  Х мин"
    const hm = value.split(':');
    return (Number(hm[0]) === 0 ? `${Number(hm[1])} мин` : `${Number(hm[0])} ч  ${Number(hm[1])} мин`);;
  }

  if ( value === null) return '';
};


// Функция извлекающая из строки вида "ХХXX-XX-ХХ", отдельно день, месяц, год 
// и конвертирующая полученный результат в строку
export const formatPremierData = (strData) => {
  const data = strData.split('-');
  const mounth =['января','февраля','марта','апреля','мая','июня','июля','августа',
                 'сентября','октября','ноября','декабря'];

  return `${Number(data[2])} ${mounth[data[1]-1]} ${Number(data[0])}`;
};

