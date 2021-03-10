# PSC

Implementacion basica de un servidor que atiende peticiones para formar grupos. 
## Primeros pasos

1.Instalar dependencias

npm install

2.Arrancar el servidor

npm run start



## Estructura de las peticiones

Para realizar las peticiones se puede usar un cliente http como Postman o Curl.

####Crear un grupo nuevo

El metodo que se debe usar es de tipo *POST* y debe estar dirigido a la url: localhost:3000/user/create. En el body debe de tener un atributo llamado id que contenga el nombre del grupo que queremos crear.

*e.g.* curl -d '{"id":"PSC"}' -H 'Content-Type: application/json'  localhost:3000/user/create

Recuperamos un mensaje por parte del servidor indicando la creacion del grupo y un estado en la cabecera de 200 OK 

####Unirse a un grupo

El metodo que se debe usar es de tipo *POST* y debe estar dirigido a la url: localhost:3000/user/join. En el body debe de tener un objeto json conteniendo los siguientes atributos: 

id: nombre del grupo a unirse
name: nombre del usuario
phone: telefono del usuario

*e.g.* curl -v -d '{"id":"PSC", "name":"pepe", "phone":"123..."}' -H 'Content-Type: application/json'  localhost:3000/user/join

*e.g.* curl -v -d '{"id":"PSC", "name":"carl", "phone":"123..."}' -H 'Content-Type: application/json'  localhost:3000/user/join

Recuperamos un mensaje por parte del servidor indicando que se ha unido satisfactoriamente al grupo y un estado en la cabecera de 200 OK

####Recuperar los miembros del grupo

Para recuperar los detalles de todos los integrantes del grupo, se realiza una peticion de tipo *GET* en la url localhost:3000/user/<id\>, sustituyendo id por le nombre del grupo del cual queremos recuperar los miembros.

*e.g.*  curl localhost:3000/user/PSC

Esto nos devuelve un objecto con la siguiente estrucutra
{"member1":{"name":"pepe","phone":"123..."},"member2":{"name":"carl","phone":"123..."}}
