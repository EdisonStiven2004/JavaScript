// const suma = (a, b) => a + b;
// console.log(suma(3, 4));

// const cuentaAtras = (t) => {
//     if(t === 0) return;
//     else{
//         console.log(t);
//         cuentaAtras(t - 1);
//     }
// }
// cuentaAtras(10);

// const factorial = (n) => {
//     if(n === 0 || n === 1) return 1;
//     else return (n * factorial(n-1));
// }
// console.log(factorial(5));


//crear funcion que obtenga la suma de los numeros de 1 hasta n

// const suma = (n, n2 = 1) => {
//     if(n <= 0) return 1;
//     if(n2 < n){
//         return n2 + suma(n, n2 + 1);
//     }
//     else{
//         return n2;
//     }
// }
// console.log(suma(20));


//Imprimir los numeros de 1 hasta n

// const imprimir = (n, n2 = 1) => {
//     if(n >= 1 && n2 <= n){
//         console.log(n2);
//         imprimir(n, n2 + 1);
//     }
//     else if(n < 0 && n2 >= n){
//         console.log(n2);
//         imprimir(n, n2 - 1);
//     }
//     else{
//         console.log("El conteo ha terminado");
//     }
// }
// imprimir(-5);

// function digitos(n){
//     if(n===0) return;
//     else{
//         digitos(n-1);
//         console.log("--->", n);
//     }
// }
// digitos(5);

//Obtener la cantidad de digitos de un numero
// 
//
// const digitosNumero = (n) => {
//     if(n < 10) return 1;
//     else return 1 + digitosNumero(n / 10);
// }
// console.log(digitosNumero(10001));

// let a = 5;

// console.log(3 > a ? "Es menor" : "Es mayor");

