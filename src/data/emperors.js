"use strict";

const emperors = [
  {
    'id': 'petr-1',
    'name': 'Пётр I',
    'birth': '1672',
    'image': 'petr-1.jpg',
    'cover': 'petr1-cover.jpg',
    'link': 'https://ru.wikipedia.org/wiki/%D0%9F%D1%91%D1%82%D1%80_I',
    'facts': [
      { 'year': '1672', 'type': 'H', 'city': 'Москва', 'info': '-Рождение Петра I' },
      { 'year': '1689', 'type': 'H', 'city': 'Москва(Кремль)', 'info': 'Восхождение на трон' },
      { 'year': '1697', 'type': 'M', 'city': 'Прага',  'info': '-Великое посольство' },
      { 'year': '1700', 'type': 'H', 'city': 'Россия-Швеция', 'info': '-Северная Война' },
      { 'year': '1725', 'type': 'M', 'city': 'Санкт-Петербург',  'info': '- Скончался Петр I' },
    ],
  },
  {
    'id': 'petr-2',
    'name': 'Петр II',
    'birth': '1715',
    'image': 'petr2.jpg',
    'cover': 'petr2-cover.jpg',
    'link': 'https://ru.wikipedia.org/wiki/%D0%9F%D1%91%D1%82%D1%80_II',
    'facts': [
      { 'year': '1715', 'type': 'H', 'city': 'Санкт-Петербург', 'info': '-Рождение Петра II' },
      { 'year': '1727', 'type': 'M', 'city': 'Москва(Кремль)', 'info': '-Завещание Екатерины(Наследование)'},
      { 'year': '1730', 'type': 'M', 'city': 'Санкт-Петербург',  'info': '-Смерть(оспа)' },
    ],
  },
  {
    'id': 'catherine-II',
    'name': 'Екатерина II',
    'birth': '1729',
    'image': 'catherine-2.jpg',
    'cover': 'catherine-2-cover.jpg',
    'link': 'https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0_II',
    'facts': [
      { 'year': '1672', 'type': 'H', 'city': 'Москва', 'info': '-Рождение Петра I' },
      { 'year': '1689', 'type': 'H', 'city': 'Москва(Кремль)', 'info': 'Восхождение на трон' },
      { 'year': '1697', 'type': 'M', 'city': 'Прага',  'info': '-Великое посольство' },
      { 'year': '1700', 'type': 'H', 'city': 'Россия-Швеция', 'info': '-Северная Война' },
      { 'year': '1725', 'type': 'M', 'city': 'Санкт-Петербург',  'info': '- Скончался Петр I' },
    ],
  },
  {
    'id': 'alexander-II',
    'name': 'Александр II',
    'birth': '1818',
    'image': 'alexander-2.jpg',
    'cover': 'alexander-2-cover.jpg',
    'link': 'https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_II',
    'facts': [
      { 'year': '1672', 'type': 'H', 'city': 'Москва', 'info': '-Рождение Петра I' },
      { 'year': '1689', 'type': 'H', 'city': 'Москва(Кремль)', 'info': 'Восхождение на трон' },
      { 'year': '1697', 'type': 'M', 'city': 'Прага',  'info': '-Великое посольство' },
      { 'year': '1700', 'type': 'H', 'city': 'Россия-Швеция', 'info': '-Северная Война' },
      { 'year': '1725', 'type': 'M', 'city': 'Санкт-Петербург',  'info': '- Скончался Петр I' },
    ],
  },
  {
    'id': 'alexander-III',
    'name': 'Александр III',
    'birth': '1845',
    'image': 'alexander-3.jpg',
    'cover': 'alexander-3-cover.jpg',
    'link': 'https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_III',
    'facts': [
      { 'year': '1672', 'type': 'H', 'city': 'Москва', 'info': '-Рождение Петра I' },
      { 'year': '1689', 'type': 'H', 'city': 'Москва(Кремль)', 'info': 'Восхождение на трон' },
      { 'year': '1697', 'type': 'M', 'city': 'Прага',  'info': '-Великое посольство' },
      { 'year': '1700', 'type': 'H', 'city': 'Россия-Швеция', 'info': '-Северная Война' },
      { 'year': '1725', 'type': 'M', 'city': 'Санкт-Петербург',  'info': '- Скончался Петр I' },
    ],
  }
];

export default emperors;
