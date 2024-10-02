# E-commerce wishlistApp - Backend

Esta es una API RESTful para una tienda en línea, construida con Node.js, Express y MongoDB. Permite a los usuarios ver productos, agregar productos a una lista de deseos.

## Requisitos Previos

- [Node.js](https://nodejs.org/) (v14 o superior)
- [MongoDB](https://www.mongodb.com/) 



## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework web para construir APIs.
- **MongoDB**: Base de datos NoSQL 

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Andrezgrondona/DoubleVPartners-backend.git
 

2. Instala las dependencias:

npm install

3. Iniciar el servidor:

npm run dev

- Asegúrate de que MongoDB esté en ejecución. 

- Configura la conexión a la base de datos 

## Agregar un Producto

Para agregar un nuevo producto a la base de datos, puedes utilizar el siguiente endpoint.

### Endpoint

- **URL**: `/api/products`
- **Método**: `POST` Postamn o Thunderclient
- **Descripción**: Agrega un nuevo producto a la tienda.

### Cuerpo de la Solicitud (JSON)

Debes enviar un objeto JSON con los siguientes campos:

```json
{
    "name": "Nombre del Producto",
    "category": "Categoría del Producto",
    "price": 99.99,
    "description": "Descripción del producto.",
    "urlImage": "http://example.com/image.jpg"
}


