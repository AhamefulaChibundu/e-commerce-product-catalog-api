# E-commerce Product Catalog API

A RESTful API built with **Node.js**, **Express.js**, and **MongoDB** for managing an online store's product catalog.

This project is being developed as a collaborative backend project.

---

## Team Members

- Ahamefula Chibundu Uchechi
- Kamara Sheku Ishmael
- Precious Uloh
- Seyram Afake

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Joi
- dotenv
- CORS

---

## Project Structure

```
e-commerce-product-catalog-api/
│
├── controllers/
│   └── product.controller.js
│
├── database/
│   └── db.js
│
├── middlewares/
│   ├── errorHandler.js
│   ├── logger.js
│   ├── schema.js
│   └── validator.js
│
├── models/
│   └── product.model.js
│
├── routes/
│   └── product.routes.js
│
├── .env.example
├── .gitignore
├── index.js
├── package.json
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/AhamefulaChibundu/e-commerce-product-catalog-api.git
```

Navigate into the project

```bash
cd e-commerce-product-catalog-api
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Start the development server

```bash
npm run dev
```

---

## Current Status

- ✅ Project initialized
- ✅ Database configuration
- ✅ Product model created
- ✅ Folder structure completed

The API endpoints, middleware, validation, and deployment are currently under development.

---

## Planned Features

- Create Product
- Get All Products
- Get Product by ID
- Update Product
- Delete Product
- Search Products
- Category Filtering
- Sorting
- Pagination
- Request Validation
- Request Logging
- Global Error Handling
- Render Deployment

---
