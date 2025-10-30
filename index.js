//RESUELVE LOS EJERCICIOS AQUÍ
//ejercicio1
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
const [,ana]=empleados;

//Ejercicio 2

const [{email:emailLuis}] = empleados

//Ejercicio 3
// Inicialmente
let a = 5;
let b = 3;
[a,b]=[b,a]

//Ejercicio 4

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};
const {today: maximaHoy, tomorrow: maximaManana} = HIGH_TEMPERATURES

//Ejercicio 5

const sumEveryOther = (...args) => args.reduce((acumulador, elemento) => acumulador + elemento,0)

//Ejercicio 6

const addOnlyNums = (...args) => args.filter(elemento => Number(elemento)).reduce((acumulador, elemento) => acumulador + elemento,0)

//Ejercicio 7 

const countTheArgs = (...args) => args.length

//Ejercicio 8

const combineTwoArrays = (array1,array2) => [...array1,...array2] 

//Ejercicio 9 

const onlyUniques = (...args) => args.filter((elemento,index)=> args.indexOf(elemento)===index)

//Ejercicio 10 

const combineAllArrays = (...args) => args.flat()

//Ejercicio 11 
const sumAndSquare = (...args) => args.map(elemento=>elemento**2).reduce((acumulador,elemento)=>acumulador+elemento,0)