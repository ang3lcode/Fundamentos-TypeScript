
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
