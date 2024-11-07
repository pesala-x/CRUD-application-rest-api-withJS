# Node.js MySQL CRUD Application

A full-stack CRUD application built with **Node.js** and **MySQL**. This project demonstrates a layered architecture, connecting a Node.js backend with a frontend interface to manage data in a MySQL database.

## 📝 Features

- **Create, Read, Update, Delete** (CRUD) operations on data stored in MySQL
- Layered architecture with a structured file system for scalability
- Responsive and attractive frontend using Bootstrap
- RESTful API design for seamless frontend-backend communication

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MySQL](https://www.mysql.com/) server running
- Optional: [Postman](https://www.postman.com/) for API testing

### Installation

1. **Clone the repository:**
   ```bash
   https://github.com/pesala-x/CRUD-application-rest-api-withJS.git
   cd CRUD-application-rest-api-withJS
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up the database:**

   - Create a MySQL database and configure the database settings in the `.env` file.

4. **Run the application:**
   ```bash
   node app.js
   ```

### Directory Structure

```
📂 project-root
├── 📂 config
│   └── db.js          # Database connection setup
├── 📂 controllers
│   └── productController.js # Controllers for product routes
├── 📂 models
│   └── productModel.js # Data model for products
├── 📂 routes
│   └── productRoutes.js # Route definitions for product operations
├── 📂 services
│   └── productService.js # Business logic for CRUD operations
├── 📂 public
│   └── (Frontend code here)
└── app.js              # Main application file
```

## 🛠️ Usage

1. **Start the server:**
   ```bash
   node app.js
   ```

2. **Access the frontend:**
   - Visit `http://localhost:3000` in your browser.

3. **API Endpoints:**

   - `GET /api/products` - Retrieve all products
   - `POST /api/products` - Add a new product
   - `PUT /api/products/:id` - Update a product by ID
   - `DELETE /api/products/:id` - Delete a product by ID

## 📦 Technologies Used

- **Backend:** Node.js, Express
- **Database:** MySQL
- **Frontend:** HTML, CSS, JavaScript, Bootstrap
- **Other Tools:** Axios (HTTP requests), Dotenv (environment variables)

## 🌟 Screenshots

![Product List](url-to-product-list-screenshot)
![Product Form](url-to-product-form-screenshot)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙌 Acknowledgments

Special thanks to  my lecturer `mr.udarasan`.

