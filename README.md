# JS-scopes-estructuras
Primer proyecto en JS para identificar qué scopes existen en el programa y que estructuras de control se manejan en él

TIPOS DE SCOPE

Scope Global: Las variables se declaran fuera de bloques o funciones pero pueden ser utilizadas en cualquier parte del programa. En ellas ya no se recomienda el uso de var.

Scope Local: Cuando puede accederse al código únicamente dentro de cierta parte del mismo. como en funciones o bloques.

- Scope Function: Las variables son parte de la función y no pueden utilizarse fuera de ella, en las funciones var es la palabra clave recomendada.

- Scope Block: Se define a como bloque a todo aquello que se encuentre dentro de llaves {}, generalmente usados para agrupar instrucciones. En bloques las palabras clave let y const son recomendadas dado que fueron creadas en la versión ES6 para trabajar en bloques, y que var puede verse afectado por el hoisting involuntario.

ESTRUCTURAS DE CONTROL

- Condicionales: Evalua condiciones en cuanto a factores verdadero o falso, sin embargo puede incluir condiciones intermedias (como else if).

- Bucles: Se desconoce el número de intentos que el usuario tendrá en esa función por lo que se ejecutará hasta que se cumpla la condición.


