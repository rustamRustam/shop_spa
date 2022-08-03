export const funcsSort = [
  function (a, b) {
    return 0;
  },
  function compare(a, b) {
    if (a.title > b.title) return 1; // если первое значение больше второго
    if (a.title === b.title) return 0; // если равны
    if (a.title < b.title) return -1; // если первое значение меньше второго
  },
  function compare(a, b) {
    if (a.title > b.title) return -1;
    if (a.title === b.title) return 0;
    if (a.title < b.title) return 1;
  },
  function compare(a, b) {
    const a_price = +a.price;
    const b_price = +b.price;
    if (a_price > b_price) return 1; // если первое значение больше второго
    if (a_price === b_price) return 0; // если равны
    if (a_price < b_price) return -1; // если первое значение меньше второго
  },
  function compare(a, b) {
    const a_price = +a.price;
    const b_price = +b.price;
    if (a_price > b_price) return -1;
    if (a_price === b_price) return 0;
    if (a_price < b_price) return 1;
  }
]

export default [
  {
    "id": 0,
    "name": "По умолчанию"
  },
  {
    "id": 1,
    "name": "По алфавиту(А->Я)"
  },
  {
    "id": 2,
    "name": "По алфавиту(Я->А)"
  },
  {
    "id": 3,
    "name": "Дешевле"
  },
  {
    "id": 4,
    "name": "Дороже"
  },
];
