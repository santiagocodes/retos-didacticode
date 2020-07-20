# DidactiCode Challenges

[didacticode.com](https://didacticode.com/) is a Spanish platform with courses and digital material.

In this repository you can find my solutions to the challenges posted on this platform.

## Money Heist Challenge

### [Berlin, Tokyo and Moscow are capitals too](https://didacticode.com/reto-la-casa-de-papel/)

> Dear Ada, we are having terrible problems with the names of the robbers. We need you to create a program that, given a capital city, indicates whether it is one of the names chosen by The Professor for any of the members of his team or not. We need to have it within 10 days... too many hostages' lives are at stake!
> -Translation of the original challenge.

My Solution:

[![money-heist-challenge.png](https://i.postimg.cc/rpqJVTrV/money-heist-challenge.png)](https://codepen.io/santiagocodes/pen/jOWmxda)
[demo](https://codepen.io/santiagocodes/pen/jOWmxda)

Ada's Solutions:

```html
<!DOCTYPE html>
<html lang="es">
   <head>
      <meta content="text/html;charset=utf-8" http-equiv="Content-Type" />
      <meta content="utf-8" http-equiv="encoding" />
      <title>La casa de papel - Comprobar si un elemento está en una lista</title>
   </head>

   <body>
      <script src="Reto01_LaCasaDePapel.js"></script>
   </body>
</html>
```

```javascript
// Tokio, Moscú, Berlín, Nairobi, Río, Denver, Estocolmo, Helsinki
const capitales = ['Tokio', 'Berlín', 'Moscú', 'Nairobi'];

let capitalUsuario = prompt('Introduce el nombre de una ciudad');
if (validarCapital10(capitalUsuario))
   document.write(
      'La ciudad HA SIDO ELEGIDA por El Profesor para el nombre de sus atracadores'
   );
else
   document.write(
      'La ciudad NO HA SIDO ELEGIDA por El Profesor para el nombre de sus atracadores'
   );

function validarCapital(capital) {
   let encontrado = false;
   if (capital === 'Tokio') encontrado = true;
   if (capital === 'Moscú') encontrado = true;
   if (capital === 'Berlín') encontrado = true;
   if (capital === 'Nairobi') encontrado = true;
   return encontrado;
}

function validarCapital2(capital) {
   let encontrado = false;
   if (capital === 'Tokio') encontrado = true;
   else if (capital === 'Moscú') encontrado = true;
   else if (capital === 'Berlín') encontrado = true;
   else if (capital === 'Nairobi') encontrado = true;
   return encontrado;
}

function validarCapital3(capital) {
   let encontrado = false;
   switch (capital) {
      case 'Tokio':
         encontrado = true;
         break;
      case 'Moscú':
         encontrado = true;
         break;
      case 'Berlín':
         encontrado = true;
         break;
      case 'Nairobi':
         encontrado = true;
         break;
      //default no es necesario
   }
   return encontrado;
}

function validarCapital4(capital) {
   let encontrado = false;
   switch (capital) {
      case 'Tokio':
      case 'Moscú':
      case 'Berlín':
      case 'Nairobi':
         encontrado = true;
         break;
      //default no es necesario
   }
   return encontrado;
}

function validarCapital5(capital) {
   let encontrado = false;
   if (
      capital === 'Tokio' ||
      capital === 'Moscú' ||
      capital === 'Berlín' ||
      capital === 'Nairobi'
   )
      encontrado = true;
   return encontrado;
}

function validarCapital6(capital) {
   let encontrado = false;
   for (let i = 0; i < capitales.length; i++) {
      if (capitales[i] === capital) encontrado = true;
   }
   return encontrado;
}

// indexOf ES5
function validarCapital7(capital) {
   let encontrado = false;
   if (capitales.indexOf(capital) !== -1) encontrado = true;
   return encontrado;
}

// find ES6
function validarCapital8(capital) {
   let encontrado = capitales.find((cap) => cap === capital);
   console.log(capitales.find((cap) => cap === capital));
   return encontrado;
}

// findIndex ES6
function validarCapital9(capital) {
   let encontrado = false;
   if (capitales.findIndex((cap) => cap === capital) !== -1) encontrado = true;
   console.log(capitales.findIndex((cap) => cap === capital));
   return encontrado;
}

// includes ES7
function validarCapital10(capital) {
   let encontrado = capitales.includes(capital);
   return encontrado;
}
```

## Stranger Things Challenge

### [Dustin, Suzie, and Planck's Constant](https://didacticode.com/reto-stranger-things/)

> Miss Ada: We need you to create a form that checks if Planck constant has been entered correctly. By the way, the constant is 6.62607015, although Suzie mentions an earlier version 6.62607004.
> -Translation of the original challenge.

My Solution:

[![stranger-things.jpg](https://i.postimg.cc/Mpw6p3KZ/stranger-things.jpg)](https://codepen.io/santiagocodes/pen/zYrwWed)
[demo](https://codepen.io/santiagocodes/pen/zYrwWed)

Ada's Solutions:

```html
<!DOCTYPE html>
<html lang="es">
   <head>
      <title>
         Dustin, Suzie y la constante de Planck - Validar una contraseña con
         Javascript
      </title>
      <meta charset="utf-8" />
      <style>
         body {
            background-image: url(cajafuerte.jpg);
            height: 100vh;
            padding: 0;
            color: white;
            font-family: sans-serif;
         }
         div.centrado {
            height: 100%;
            display: flex;
            align-items: center; /* Vertical */
            margin-left: 20rem;
         }
         input[type='password'] {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
         }
         input[type='submit'] {
            width: 100%;
            background-color: crimson;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            border-radius: 4px;
            cursor: pointer;
         }
      </style>
      <script src="Reto02_StrangerThings1.js"></script>
   </head>
   <body>
      <div class="centrado">
         <form action="salvarmundo.html" method="post">
            Introduzca la contraseña para evitar la destrucción del mundo
            <br /><br />
            <input
               type="password"
               id="password"
               name="password"
               placeholder="Introduzca la contraseña"
               title=""
               required
            /><br />
            <input type="submit" value="Comprobar" id="enviar" />
         </form>
      </div>
   </body>
</html>
```

```javascript
window.addEventListener('load', inicio, false);

// Función que se ejecuta después de cargar el HTML (load)
function inicio() {
   document.getElementById('enviar').addEventListener('click', comprobar, false);
}

// Función que comprueba si el valor que contiene el campo password es correcto
function comprobar(evento) {
   let pass = document.getElementById('password').value;

   if (passwordCorrecta(pass)) {
      alert('Acceso correcto');
   } else {
      alert('Acceso erróneo');
      evento.preventDefault();
   }
}

// Función que comprueba si la contraseña es la constante de Planck -versión actual y
// versión de los años 80; además, consideramos que puede introducirse coma o punto.
// Se podría utilizar la función .replace para cambiar las comas por puntos o viceversa
function passwordCorrecta(password) {
   const constantes = ['6.62607015', '6.62607004', '6,62607015', '6,62607004'];
   return constantes.includes(password);
}
```

```html
<!DOCTYPE html>
<html lang="es">
   <head>
      <title>
         Dustin, Suzie y la constante de Planck - Validar una contraseña con
         Javascript
      </title>
      <meta charset="utf-8" />
      <style>
         body {
            background-image: url(cajafuerte.jpg);
            height: 100vh;
            padding: 0;
            color: white;
            font-family: sans-serif;
         }
         div.centrado {
            height: 100%;
            display: flex;
            align-items: center; /* Vertical */
            margin-left: 20rem;
         }
         input[type='password'] {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
         }
         input[type='submit'] {
            width: 100%;
            background-color: crimson;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            border-radius: 4px;
            cursor: pointer;
         }
         input[type='password']:invalid {
            background-color: darksalmon;
         }
         input[type='password']:valid {
            background-color: darkseagreen;
         }
      </style>
      <script src="Reto02_StrangerThings2.js"></script>
   </head>
   <body>
      <div class="centrado">
         <form action="salvarmundo.html" method="post">
            Introduzca la contraseña para evitar la destrucción del mundo
            <br /><br />
            Pista: la contraseña es 6.62607015 o 6.62607004 <br />y la puedes
            escribir con coma o con punto
            <br />
            <input
               type="password"
               id="password"
               name="password"
               placeholder="Introduzca la contraseña"
               title="Es obligatorio meter algún valor de 10 caracteres: empieza con un dígito, le sigue un punto o una coma y luego 8 dígitos"
               pattern="^[0-9]{1}[.,]{1}[0-9]{8}$"
               required
            />
            <input type="submit" value="Comprobar" id="enviar" />
            <div id="passwordError"></div>
         </form>
      </div>
   </body>
</html>
```

```javascript
window.addEventListener('load', inicio, false);

// Función que se ejecuta después de cargar el HTML (load)
function inicio() {
   document.getElementById('enviar').addEventListener('click', function (evento) {
      // VALIDACIÓN DEL CAMPO HTML
      if (!password.validity.valid) {
         mostrarError();
         evento.preventDefault();
         // VALIDACIÓN DEL VALOR
      } else {
         comprobar(evento);
      }
   });
}

// Función que comprueba si el valor que contiene el campo password es correcto
function comprobar(evento) {
   let pass = document.getElementById('password').value;

   if (passwordCorrecta(pass)) {
      alert('Acceso correcto');
   } else {
      alert('Acceso erróneo');
      evento.preventDefault();
   }
}

// Función que comprueba si la contraseña es la constante de Planck -versión actual y
// versión de los años 80; además, consideramos que puede introducirse coma o punto.
// Se podría utilizar la función .replace para cambiar las comas por puntos o viceversa
function passwordCorrecta(password) {
   const constantes = ['6.62607015', '6.62607004', '6,62607015', '6,62607004'];
   return constantes.includes(password);
}

// Función que comprueba que el campo password cumple con las restricciones de
// obligatoriedad y patrón.
function mostrarError() {
   if (password.validity.valueMissing) {
      passwordError.innerHTML = 'Debe introducir una contraseña';
   } else if (password.validity.patternMismatch) {
      passwordError.innerHTML =
         'No ha introducido un valor que cumpla el patrón.<br/>(1 dígito, 1 punto o coma y 8 dígitos)';
   }
}
```

## Harry Potter Challenge

### [Hogwarts Express Passenger Management](https://didacticode.com/reto-harry-potter/)

> Miss Ada: We need to control the number of passengers arriving at the end of a journey taking into account how many of them get on and off at each stop. We will provide you with a list of the type: [b1, d1][b2, d2] [b3, d3]… where in each pair of elements go the number of passengers boarding (b) and the number of passengers disembarking (d). Thus, processing that list, we will know the number of final passengers that should arrive at the end of the journey. Example entry: [[7.0][8.2] [9.5][3.1]] Example of departure: 19 passengers
> Note: In the first pair of numbers, the second will always be 0 because no one gets off at the first station. There is no need to check this number: we will always provide it to you correctly.
> -Translation of the original challenge.

My Solution:

[![harry-potter-challenge.jpg](https://i.postimg.cc/y85zSf7S/harry-potter-challenge.jpg)](https://codepen.io/santiagocodes/pen/oNbdQma)
[demo](https://codepen.io/santiagocodes/pen/oNbdQma)

Ada's Solutions:

```html
<!DOCTYPE html>
<html lang="es">
   <head>
      <title>
         Gestión de pasajeros del expreso de Hogwarts - Recorrer array bidimensional
      </title>
      <meta charset="utf-8" />
      <style>
         body {
            background-image: url(vias.jpg);
            background-size: cover;
            padding: 0;
            color: white;
            font-family: sans-serif;
         }
      </style>
      <script src="Reto03_HarryPotter.js"></script>
   </head>
   <body></body>
</html>
```

```javascript
let pasajeros = [
   [10, 0],
   [3, 5],
   [5, 2],
   [4, 6],
   [3, 3],
]; // SALIDA: 9

// Función que, a partir de un array bidimensional de pasajeros, devuelve el número de pasajeros que quedan en el tren
function hogwarts(pasajeros) {
   let total = 0;

   for (let i = 0; i < pasajeros.length; i++) {
      total += pasajeros[i][0];
      total -= pasajeros[i][1];
      //total = total + pasajeros[i][0] - pasajeros[i][1];
   }
   return total;
}
console.log(hogwarts(pasajeros));

/* La función reduce tiene dos argumentos: una función arrow y un valor de partida del acumulador: 0 en este caso
   La función arrow tiene en el primer argumento el acumulador, y en el segundo el 
   elemento que queremos reducir (que en este caso, es un array de dos elementos)
   Esta función devuelve el acumulador más el número que hay en la primera posición 
   del array menos la segunda; se repite hasta que finaliza el array */

// función reductora = (acumulador, valorActual) => acumulador operador valorActual;

let hogwarts2 = (pasajeros) =>
   pasajeros.reduce((acumulador, [suben, bajan]) => acumulador + suben - bajan, 0);
console.log(hogwarts2(pasajeros));

/* En esta versión consideramos, en lugar de especificar que es un array de dos elementos,
   indicamos el array y lo procesamos dentro de la función extrayendo cada elemento. */
let hogwarts3 = (pasajeros) =>
   pasajeros.reduce(
      (acumulador, pasajeros) => acumulador + pasajeros[0] - pasajeros[1],
      0
   );
console.log(hogwarts3(pasajeros));
```
