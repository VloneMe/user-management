# User Management App

A simple React-based user management application using Material Tailwind components. The app allows for creating and updating user information.


## Features

- Create new users
- Update existing users
- Password validation
- Responsive UI using Material Tailwind

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (>= 12.x)
- npm (>= 6.x) or yarn (>= 1.x)
- A running instance of the API server (update the URL as needed)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/VloneMe/user-management.git
cd user-management-app 
cd either client or server directory

npm install
# or
yarn install


## Usage
Once the application is running, you can access it in your web browser. You can create new users, update existing ones, and perform password validation.

## API
The application interacts with an API for user management. Make sure your API server is running and accessible at http://localhost:5000/api.

## Endpoints
- GET /api/users: Fetches the list of users
- POST /api/users: Creates a new user
- PUT /api/users/:id: Updates an existing user

