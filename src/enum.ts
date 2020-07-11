export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

enum COLORS {
  RED = '#FF000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#000FF',
  // YELLOW = '#FFFFOO',
  BLACK = '#00000'
}

let green = COLORS.GREEN;
console.log({ green });

enum COLORS {
  YELLOW ='#FFFF00',
  GRAY = '#808000'
}
