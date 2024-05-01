
### Tipos de JavaScript

- example = null; // null
- example = true; // boolean
- example = 'string'; // string
- example = 3.14; // number
- example = undefined; // undefined
- example = [ ]; // array 
- example = symbol("abc"); // symbol

- example = { // obj
   name: 'angel',
   lastName: 'perez'
}

- example = funcion(a) { // funcion
   return a;
}


### Tipos TypeScript

const producto:  ***number*** = 12

Declaración: el alcance de la variable (const, let, var)
Tipado:  que va a tener la variable (number, string, boolean)
valor:  valor asignado.
Type annotation 

# Any

Es un tipo de dato exclusivo de **TypeScript**. Su traducción sería “cualquiera”, pues literalmente nos permite almacenar cualquier tipo de dato en una variable:

```ts
let myDynamicVar: any;

myDynamicVar = 100; // number
myDynamicVar = null;
myDynamicVar = {}; // Object
myDynamicVar = ""; // string
```

Se recomienda **no usar este tipo de dato**, pues se considera **mala práctica**.

## Importancia del Any

La utilidad de `any` radica cuando se quiere migrar de a pocos a TypeScript desde JavaScript, ya que incrementalmente definiríamos el tipo de dato donde sea necesario sin romper nuestro programa de golpe.

## Tratar Any como un primitivo

Se pueden realizar conversiones a tipos de datos primitivos de JavaScript:

```ts
//Caso 1
myDynamicVar = "HOLA";
const otherString = (myDynamicVar as string).toLowerCase();

//Caso 2
myDynamicVar = 1212;
const otherNumber = (<number>myDynamicVar).toFixed();
```

Como observamos, podemos tratar nuestra variable `any` como `string` en el primer caso y como `number` en el segundo. Después de esto, podemos acceder a los métodos `toLowerCase()` y `toFixed()` según el tipo de dato correspondiente.



# Union Types

Nos permite definir más de un tipo de dato a una variable, argumento de una función, etc.

```ts
let userId: string | number;

userId = 10;
userId = "10";

function helloUser(id: string | number){
    console.log(`Hola usuario con el número de id ${id}`);
}
```

Aquí indicamos que **id** y **userId** pueden ser de tipo `string` o `number`.

Una mejor práctica

El tipo de dato `any` nos brinda la flexibilidad de JavaScript en TypeScript con respecto al tipado. Sin embargo, si deseamos eso, es mejor hacer uso de los Union Types.


# Alias y tipos literales

Los Alias nos permiten darle un nombre a uno o varios tipos de datos en conjunto. Un ejemplo de como se definen sería así:

```ts
type UserID = string | boolean | number;
```

¡Ahora _UserID_ lo podemos usar como si fuese un tipo de dato `string`, `boolean` o `number`!

```ts
let dynamicVar: UserID = "300";

dynamicVar = true;
dynamicVar = 200;
```

Los Union Types que vayamos a utilizar ahora serán menos tediosos de escribir, pues con los Alias podemos utilizar el mismo conjunto de tipos de datos en la definición de varias variables, beneficiándonos en escribir menos código.

```
type UserID = string | boolean | number;

let dynamicVar: UserID = "300";

function helloUser( userId: UserID ) {
    console.log(`Un saludo al usuario con el número de id ${userId}`);
}
```

**Nota:** la palabra _type_ en los Alias es algo propio de TypeScript.

## Tipos Literales (Literal Types)

Gracias a esto podemos definir explícita y literalmente los posibles valores que puede tomar nuestra variable. Por ejemplo:

```ts
let shirtSize: "S" | "M" | "L" | "XL";

shirtSize = "M"; //CORRECTO
shirtSize = "S"; //CORRECTO
shirtSize = "qwrty"; //ERROR. No está en las opciones.
shirtSize = "SS"; //ERROR. Letra de más.
shirtSize = "m"; //ERROR. Está en minúscula.
```

Definimos que la variable `shirtSize` pueda ser una de las 4 posibles opciones de valores, que estos sean de tipo `string` y que estén en mayúscula, por tanto, si queremos asignar un valor que no sea exactamente como lo declaramos, TypeScript nos mostrará un error.

## Alias + Tipos Literales

También podríamos combinarlas para facilitar aún más el desarrollo de nuestro programa:

```ts
type Sizes = 'S' | 'M' | 'L' | 'XL';

let shirtSize: Sizes;
shirtSize = "M";

function yourSize( userSize: Sizes ){
    console.log(`Tu medida es ${userSize}`);
}
```


# Null y Undefined

Estos dos funcionan como dos tipos de datos, al igual que, por ejemplo, `string` o `number`.

El tipo de dato`null` es para indicar un valor nulo y `undefined` para algo indefinido. Son tipos diferentes.

## Null y Undefined como tipo Any

En **TypeScript**, si **no especificamos** que va a ser `null` o `undefined`, estos son **inferidos** como tipo `any`:

```ts
//TypeScript
let myVar = null; //Tipo any
let otherVar = undefined; //Tipo any

let myNull: null = null; // Tipo null
let myUndefined: undefined = undefined; //Tipo undefined
```

## Union Types como emergencia

Hay casos en la que queremos que una variable sea de tipo `string` o `number` y que al inicializarlas sean de tipo `null` o `undefined` para luego asignarles un valor del tipo de dato de los primeros mencionados. En este contexto podríamos usar los [Union Types](https://platzi.com/clases/2878-typescript/47243-union-types/):

```ts
let myNumber: number | null = null;
myNumber = 50;

let myString: string | undefined = undefined;
myString = "Hola TypeScript";
```

# Funciones
Las **funciones** son nativas de JavaScript y esencialmente funcionan igual en TypeScript. Sin embargo, este último, con su sistema de tipado, nos ayudará a llevar a cabo una implementación más segura:

- Podemos definir que los argumentos de la función tengan un determinado tipo de dato (o más de uno si se usa Union Types):

```ts
type Sizes = 's' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

function createProductJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
){
   return {
        title,
        createdAt,
        stock,
        size
    }
}
```

En el argumento `createdAt` se indica que es de tipo Date en alusión al **objeto Date** propio de JavaScript y no a un tipo de dato como `string` o `number`. Son diferentes las definiciones.

- Cuando hagamos uso de nuestra función, TypeScript comprobará que le envíes todos los parámetros en orden y con el tipo de dato que se declaró en la función:

```ts
const producto1 = createProductJson(
    "titulo",
    new Date('10/10/3030'),
    30,
    'M'
)
```

![Ejemplo de una función en TypeScript](https://static.platzi.com/media/articlases/Images/ts10l.png)

En **Visual Studio Code**, si dejas el cursor sobre el nombre de la función que vas a invocar, te mostrará un mensaje con los detalles de la función, lo que espera como parámetros y lo que devolverá indicando además el orden y el tipo de dato de cada variable.

- Si queremos que un argumento sea opcional de enviar, podemos usar el modificador `?` junto al nombre del argumento:

```ts
type Sizes = 's' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

function createProductJson(
    title: string,
    createdAt: Date,
    stock?: number,
    size?: Sizes
){
    /*Código de la función*/
}
```

**Nota:** cuando definamos **argumentos opcionales** en una función, estas **deben** ubicarse al **final**, si no **TypeScript** nos indicará un **error, ya que podría haber confusiones al momento de invocar la función y enviar los respectivos parámetros:

```ts
function randomFunc(title: string, amount?: number){} //CORRECTO

function otherFunc(title?: string, amount: number){} // ERROR
```


# Retorno de funciones
En TypeScript podemos especificar el tipo de dato del valor que nos retornará una función o indicar si no se devolverá dato alguno:

## Retornos tipados en TypeScript

El tipo de retorno se especificará después de los paréntesis en los que se encuentran los argumentos de la función:

1. **Void: funciones sin retorno**  
    Este tipo de función ejecuta ciertas instrucciones, pero no devuelve dato alguno. Estas son conocidas como funciones de tipo `void`. Se definen así:

```ts
//TypeScript
function imprimirNombre(yourName: string): void {
    console.log(`Hello ${yourName}`);
}
```

2. **Funciones con retorno**  
    Por el contrario, si en la función devolveremos algún valor, podemos especificar el tipo de dato de este:

```ts
//TypeScript
function suma(a: number, b: number): number {
    return a + b;
}

function holaMundo(): string {
    return "Hello, World!";
}
```

También los retornos pueden ser más de un tipo de dato:

```ts
//TypeScript
function devolverMayor(a: number, b: number): number | string {
    if(a > b){
        // Retorna un número
        return a;
    } else if( b > a ) {
        // Retorna un número
        return b;
    } else {
        // Retorna un string
        return `Los números ${a} y ${b} son iguales`;
    }
}
```

### TypeScript también lo infiere

Si no indicamos en nuestra declaración de la función el tipado del retorno, TypeScript, al igual que con las variables, lo puede inferir según si retornas datos (sea `string`, `number`, etc.) o si nada es devuelto (tipo `void`).


# Objetos en funciones

Nuestras funciones pueden recibir objetos como argumentos. En TypeScript también podemos declarar el tipado de estos. Veamos un ejemplo:

```ts
//TypeScript
function imprimirDatos( data: { username: string, email: string } ): void {

    console.log(`Tu nombre de usuario es ${data.username} y tu email es ${data.email}`)
    
}

imprimirDatos({
      username: 'freddier',
      email: 'freddy@email.com'
})
```

En el ejemplo, el nombre `data` hace referencia al objeto que recibirá la función `imprimirDatos`. Por ello, para acceder al valor de `username` lo definimos en el `console.log` como `data.username` y para el `email` como `data.email`, pues así es como se accede a las propiedades de un objeto.

Finalmente, cuando invocamos `imprimirDatos` y queremos enviar el objeto que nos pide como parámetro, simplemente se colocará entre llaves los atributos del mismo sin colocar un nombre de referencia como `data` tal como lo hicimos en la definición de la función.


# Objetos como tipos

En TypeScript también podemos usar los Alias para definir la estructura de tipado que debería tener un objeto:

```ts
//TypeScript
type userData = {
    username: string,
    email: string
}
```

Y luego este “nuevo tipo” puede ser usado en un `array`, por ejemplo, para definir el tipado de los objetos que queramos añadir:

```ts
//TypeScript
type userData = {
    username: string,
    email: string
}

let usersList: userData[] = [];

usersList.push({
    username: "freddier", //CORRECTO
    email: "freddy@email.com", //CORRECTO
});
usersList.push({
    username: "cvander", //CORRECTO
    email: true, // ERROR. Debe ser de tipo string y NO de tipo boolean
});
```


# Módulos: import y export

Nuestro código puede ser dividido en varios **módulos** (archivos), por lo que para poder usar las funciones o variables que existen en uno y queramos acceder desde otro, utilizamos `import` y `export`.

## Export

```ts
/*---->  Archivo: funciones.ts  <----*/
export function suma(a: number, b: number): number {
    return a + b;
}

export function resta(a: number, b: number): number {
    return a - b;
}

export let numerosRandom = [1, 30, 40, 50];
export type Sizes = "S" | "M" | "L" | "XL";
```

Como observamos, tenemos un archivo llamado `funciones.ts` la cual contiene dos funciones: _suma_ y _resta_. Si estas queremos usarlas desde otro archivo, necesitamos usar la palabra reservada `export` justo antes de definir nuestra función (lo mismo aplica para las variables). De esta forma indicamos que serán exportados para ser utilizados desde otro archivo JavaScript/TypeScript.

## Import

```ts
/*---> Archivo: programa.ts  <---*/

import {suma, resta, Sizes} from "./funciones.ts";
```

Finalmente, las funciones o variables que queramos utilizar desde otro archivo son importadas de la siguiente manera:

1. Usamos la palabra reservada `import`
2. Entre llaves indicamos las funciones y/o variables que queremos acceder. Hacemos una separación con comas
3. Usamos la palabra reservada `from`, seguido de, entre comillas dobles o simples, la ruta de la ubicación en la que se encuentra el archivo del cual estamos importando su código.

## Nota

Si es un módulo **TypeScript** lo que estamos importando, es importante que en la **ruta** de los **import** figure la **extensión `.ts`** de dicho archivo. Si es un archivo JavaScript, colocar la **extensión `.js`** es **opcional**.