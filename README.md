# node-CRUD

## Project Setup

Project uses mongoDB[mongoDB](https://www.mongodb.com/try/download/community), click link to download.

### Clone project

```
git clone https://github.com/reeshkeed/node-CRUD.git
```

### Install dependencies

```
npm install
```

### Run the project

```
npm run dev
```

## Sample Request

### GET all products

Endpoint:

```
/api/products
```

### POST add new product

Endpoint:

```
/api/products/:id
```

JSON request body:

```
{
    "name": "Sample Product",
    "price": 24
}
```

### PUT update a product

Endpoint:

```
/api/products/:id
```

JSON request body:

```
{
    "name": "Update Product ",
    "price": 24
}
```

### DELETE remove a product

Endpoint:

```
/api/products/:id
```

### GET specific product

Endpoint:

```
/api/products/:id
```
