# projeto18-poc-simplified-stock-rb

A simplified stock control application.

# About

This project is a simple application that satisfies the needs of Resinas Botânicas virtual store (@resinasbotanicas on instagram). Also, it's a proof of concept (POC) to get started with typescript.

# How to run

- Clone this repository
- Run `npm i` or `npm install` to installl dependencies
- Create a PostgreSQL database, you can choose the name you prefer
- Configure the PostgreSQL database using the `dump.sql` file
- Create a `.env` file with a `PORT` and a `DATABASE_URL` as in `.env.example` file
- Run `npm run dev` to start the local server

# API documentation

Table "categories" infos:

| id  | name       |
| :-- | :--------- |
| `1` | `brinco`   |
| `2` | `anel`     |
| `3` | `colar`    |
| `4` | `pulseira` |
| `5` | `quadro`   |

# API endpoints

## POST product

### - Request

`POST /product`

```json
{
	"categoryId": 1,
	"name": "cobra coral",
	"quantity": 3
}
```

### - Response

Status: 201 Created

## POST sold product

### - Request

`POST /product-sold`

```json
{
	"name": "cobra coral"
}
```

### - Response

Status: 201 Created

## GET products

### - Request

- All products: `GET /products`

- Products by category: `GET /products?category=brinco`

### - Response

- All products

Status: 200 OK

```json
[
	{
		"id": 1,
		"name": "borboleta",
		"quantity": 1,
		"category": "colar"
	},
	{
		"id": 2,
		"name": "estrela vermelha",
		"quantity": 2,
		"category": "brinco"
	}
]
```

- Products by category "brinco":

Status: 200 OK

```json
[
	{
		"id": 2,
		"name": "estrela vermelha",
		"quantity": 2,
		"category": "brinco"
	}
]
```

## GET product

### - Request

`GET /product/:id`

### - Response

Status: 200 OK

```json
{
	"id": 1,
	"name": "borboleta",
	"quantity": 1,
	"category": "colar"
}
```

## GET products

### - Request

`GET /products/:id`

### - Response

Status: 200 OK

```json
{
	"id": 1,
	"name": "borboleta",
	"quantity": 1,
	"category": "colar"
}
```

## GET total products available

### - Request

- All products: `GET /total-products-available`

- Products by category: `GET /total-products-available?category=anel`

### - Response

- All products

Status: 200 OK

```json
{
	"total": 2
}
```

- Products by category "anel":

Status: 200 OK

```json
{
	"total": 0
}
```

## GET total products sold

### - Request

- All products: `GET /total-products-sold`

- Products by category: `GET /total-products-sold?category=anel`

### - Response

- All products

Status: 200 OK

```json
{
	"total": 0
}
```

- Products by category "anel":

Status: 200 OK

```json
{
	"total": 0
}
```

## UPDATE product quantity

### - Request

`PATCH /update-product`

```json
{
	"name": "estrela vermelha",
	"quantity": 1
}
```

### - Response

Status: 200 OK

## DELETE product

### - Request

`DELETE /delete-product/:id`

### - Response

Status: 200 OK
