const arr = [
  "1° Nivel",
  ["2° nivel", false, 42],
  [
    ["3° nivel", "1° item", "olá, mundo!"],
    ["3° nivel", "2° item", "oi, mundo!"],
  ],
  [],
];
// console.log(arr[0]);
// console.log(arr[1][0]);
// console.log(arr[1][1]);
// console.log(arr[1][2]);
// console.log(arr[2][0][0]);
// console.log(arr[2][0][1]);
// console.log(arr[2][0][2]);
// console.log(arr[2][1][0]);
// console.log(arr[2][1][1]);
// console.log(arr[2][1][2]);
// console.log(arr[3][0]);

const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
];


for (i = 0 ; i < matriz.length ; i++){
  let fila = matriz[i];
  console.log(fila)
}
