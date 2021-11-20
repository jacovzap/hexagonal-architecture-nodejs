# hexagonal-architecture-nodejs-mongodb

Se construyo un REST API de un cliente, en nodejs usando el framework express, y una base de datos en mongodb.
Este REST-API cuenta con un simple CRUD (create, read, update, delete) de un objeto "cliente".

### MODELADO DE LA APLICACION EN C4

## Nivel 1: Diagrama de contexto de sistema.
![UML](https://github.com/jacovzap/hexagonal-architecture-nodejs-mongodb/blob/main/images/C1.png)

## Nivel 2: Diagrama de Container.
![UML](https://github.com/jacovzap/hexagonal-architecture-nodejs-mongodb/blob/main/images/c2.png)

## Nivel 3: Diagrama de Componentes.
![UML](https://github.com/jacovzap/hexagonal-architecture-nodejs-mongodb/blob/main/images/c3.png)

## Nivel 4: Código o Diagrama de Clases.
![UML](https://github.com/jacovzap/hexagonal-architecture-nodejs-mongodb/blob/main/images/c4.png)


### ARQUITECTURA HEXAGONAL
Se utilizo la arquitectura hexagonal en el diseño de la API, esta arquitectura mantiene la parte de dominio como el centro del proyecto, manteniendola aislada de herramientas y accesos externos al programa.
Dentro de la carpeta src/ encontramos las siguientes carpetas, estas fueron creadas siguiendo la arquitectura mencionada:

![UML](https://github.com/jacovzap/hexagonal-architecture-nodejs-mongodb/blob/main/images/scrfiles.png)

dentro de estas podemos encontrar el codigo que dirige a la aplicacion.
Acomodando estas carpetas a su respectivo lugar en la arquitectura obtenemos el siguiente grafico:

![UML](https://github.com/jacovzap/hexagonal-architecture-nodejs-mongodb/blob/main/images/hexagonalescaled.png)


### INSTALL & RUN
Para utilizar la aplicacion se necesita tener instalado y ejecutando mongodb, puede seguir el siguiente tutorial para su instalacion -> https://docs.mongodb.com/manual/administration/install-community/
Una vez completado, iniciamos la aplicaion utilizando el comando:
```
$npm start
```
