"use strict";

//Média Aritmética Simples:
var mediaAritSimples = function mediaAritSimples() {
  for (var _len = arguments.length, media = new Array(_len), _key = 0; _key < _len; _key++) {
    media[_key] = arguments[_key];
  }
  var sum = media.reduce(function (accm, value) {
    return accm + value;
  }, 0);
  return sum / media.length;
};
console.log(mediaAritSimples(2, 6, 3, 7, 4));

//Média Aritmética Ponderada:
var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, ponderada = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    ponderada[_key2] = arguments[_key2];
  }
  var sum = ponderada.reduce(function (accum, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return accum + number * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0);
  var weightSum = ponderada.reduce(function (accum, entry) {
    var _entry$weight;
    return accum + ((_entry$weight = entry.weight) !== null && _entry$weight !== void 0 ? _entry$weight : 1);
  }, 0);
  return sum / weightSum;
};
console.log(mediaPonderada({
  number: 9,
  weight: 3
}, {
  number: 7
}, {
  number: 10,
  weight: 1
}));

//Médiana:
var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var orderdNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var middle = Math.floor(orderdNumbers.length / 2);
  if (orderdNumbers.length % 2 !== 0) {
    return orderdNumbers[middle];
  }
  var firtMedian = orderdNumbers[middle - 1];
  var secondMedian = orderdNumbers[middle];
  return mediaAritSimples(firtMedian, secondMedian);
};
console.log(median(2, 5, 99, 4, 42, 7));
console.log(median(15, 14, 8, 7, 3));

//Moda: 
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log(mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4));