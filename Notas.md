
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


