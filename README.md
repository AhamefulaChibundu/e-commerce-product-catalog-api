# 🛒 E-Commerce Product Catalog API

A RESTful API for managing an e-commerce product catalog. It provides endpoints for creating, retrieving, updating, and deleting products, along with features such as pagination, search, sorting, category filtering, and request validation.

---

## Live API

https://e-commerce-product-catalog-api-i06o.onrender.com/api/products

---

## API Documentation

Postman Documentation:

https://documenter.getpostman.com/view/37765933/2sBY4MvhLU

---

## GitHub Repository

https://github.com/AhamefulaChibundu/e-commerce-product-catalog-api

---

#  Features

* Create a product
* Retrieve all products
* Retrieve a product by ID
* Update a product
* Delete a product
* Pagination
* Product search by name
* Category filtering
* Sorting
* Request validation using Joi
* Error handling middleware
* Request logging middleware

---

# 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Joi
* Render
* Postman

---

# Installation

Clone the repository:

```bash
git clone https://github.com/AhamefulaChibundu/e-commerce-product-catalog-api.git
```

Navigate into the project folder:

```bash
cd e-commerce-product-catalog-api
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add the following variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Start the development server:

```bash
npm run server
```

---

# Project Structure

```
e-commerce-product-catalog-api
│
├── controllers
├── database
├── middlewares
├── models
├── routes
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

---

# API Endpoints

| Method | Endpoint            | Description               |
| ------ | ------------------- | ------------------------- |
| POST   | `/api/products`     | Create a new product      |
| GET    | `/api/products`     | Retrieve all products     |
| GET    | `/api/products/:id` | Retrieve a single product |
| PUT    | `/api/products/:id` | Update a product          |
| DELETE | `/api/products/:id` | Delete a product          |

---

# Query Parameters

Retrieve products with any combination of the following query parameters:

| Parameter  | Description                 | Example                 |
| ---------- | --------------------------- | ----------------------- |
| `page`     | Page number                 | `?page=1`               |
| `limit`    | Number of products per page | `?limit=10`             |
| `search`   | Search products by name     | `?search=laptop`        |
| `category` | Filter by category          | `?category=Electronics` |
| `sort`     | Sort products by a field    | `?sort=price`           |

Example:

```http
GET /api/products?page=1&limit=5&category=Electronics&sort=price
```

---

# Sample Request

### Create Product

```http
POST /api/products
```

```json
{
    "name": "Gaming Laptop",
    "price": 1800000,
    "description": "High performance gaming laptop",
    "category": "Electronics",
    "inStock": true
}
```

---

# Sample Response

```json
{
    "message": "Product created successfully",
    "data": {
        "_id": "...",
        "name": "Gaming Laptop",
        "price": 1800000,
        "description": "High performance gaming laptop",
        "category": "Electronics",
        "inStock": true
    }
}
```

---

# Validation

Incoming requests are validated using **Joi**.

Examples of validation include:

* Required product name
* Valid product category
* Price must be greater than or equal to zero
* Boolean validation for stock availability

---

# Error Handling

The API returns meaningful HTTP status codes and JSON error responses.

Example:

```json
{
    "error": "Product with the specified ID not found"
}
```

---

# Contributors

* Ahamefula Chibundu Uchechi
* Sheku Ishmael Kamara
* Precious Joseph Uloh

---

