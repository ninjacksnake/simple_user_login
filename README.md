# Simple User Login

## Overview

Welcome to the Simple User Login Application! This simple application demonstrates  a secure login system using JSON Web Tokens (JWT) and password hashing.

## Key Features

- **JWT Authentication**: Secure token-based authentication.
- **Password Hashing**: Enhanced security with bcrypt.
- **Cookie Management**: Secure cookie handling with cookie-parser.
- **Database Integration**: Local database storage using db-local.
- **Server-Side Rendering**: Dynamic web pages with EJS.
- **Express Framework**: Efficient and robust routing and middleware with Express.
- **Automated Development Workflow**: Easy development setup with Nodemon.

## Technologies Used

- **bcrypt**: For password hashing.
- **cookie-parser**: For managing cookies.
- **db-local**: For local database storage.
- **ejs**: For server-side rendering.
- **jws**: For JWT authentication.
- **express**: For handling routes and middleware.
- **nodemon**: For automatic server restarts during development.

## Architecture

### MVC Pattern

- **Model**: Represents the data and the business logic.
- **View**: Represents the presentation layer (EJS templates).
- **Controller**: Handles the user input and interacts with the model to render the view.

### Repository Pattern

- Separates the logic that retrieves the data from the business logic, providing a more modular and testable codebase.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ninjacksnake/simple_user_login.git
   cd simple_user_login

2. ```bash
   npm install

3. ## Run the app
   ```bash
   npm start / npm run dev
