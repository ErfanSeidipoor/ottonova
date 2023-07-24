# Ottonova JavaScript Coding Challenge - City Data Display

![Ottonova](ottonova.jpg)

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/ErfanSeidipoor/ottonova)](https://github.com/ErfanSeidipoor/ottonova/issues)
[![GitHub stars](https://img.shields.io/github/stars/ErfanSeidipoor/ottonova)](https://github.com/ErfanSeidipoor/ottonova/stargazers)

you can see final version of this software: [http://161.97.108.195:4442/](http://161.97.108.195:4442/)

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [API Documentation](#api-documentation)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Description

This is a coding challenge project aimed at implementing a full-stack web application to display city data. The project consists of a backend and frontend

The main objective of this project is to build a RESTful API backend that serves JSON data containing information about various cities. The frontend will retrieve this data and display it in a user-friendly manner. The provided JSON data includes diverse attributes for each city, and developers are encouraged to showcase creativity in presenting the data.

## Features

- Backend: The backend handles loading the city data from a JSON file and exposes a REST API endpoint to provide this data to the frontend. The API supports CORS to enable communication with the frontend on a different domain.
- Frontend: The frontend interacts with the backend API to fetch the city data and displays it in a visually appealing manner. It allows users to search and filter cities based on various attributes.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ErfanSeidipoor/ottonova.git
cd ottonova
```

### Development

1. Make sure you have Node.js installed on your machine.
2. Open a terminal or command prompt.
3. Navigate to the project root folder.
4. Run `yarn install` or `npm install` to install project dependencies.
5. Install Nx globally using: `npm install -g nx`.
6. Create a `.env` file inside the root of the project and copy the contents from `.envsample` to it.
7. Start the development environment by running the following Docker command:

```
docker-compose -f docker-compose-develop.yml up -d
```

8. Seed the database using: `npm run migration:run`.
9. Run the backend server with: `nx serve back`.
10. Run the frontend application with: `nx serve front`.

### Test (back)

1. Make sure you have Node.js installed on your machine.
2. Open a terminal or command prompt.
3. Navigate to the project root folder.
4. Run `yarn install` or `npm install` to install project dependencies.
5. Install Nx globally using: `npm install -g nx`.
6. Create a `.env` file inside the root of the project and copy the contents from `.envsample` to it.
7. Start the testing environment by running the following Docker command:

```
docker-compose -f docker-compose-test.yml up -d
```

8. Run tests for the backend using: `nx test back`

### Test (front)

1. Make sure you have Node.js installed on your machine.
2. Open a terminal or command prompt.
3. Navigate to the project root folder.
4. Run `yarn install` or `npm install` to install project dependencies.
5. Install Nx globally using: `npm install -g nx`.
6. Run tests for the frontend using: `nx test front`.

### Production

1. Create a `.env` file inside the root of the project and set `NX_API_ADDRESS=<ip-of-server>::4441/api`.
2. Build and deploy the production environment using the following Docker command:

```
docker-compose -f docker-compose.yml up --build -d
```

Note: Please ensure that you have Docker installed and running on your server for the production deployment.

With these revised instructions, the steps are more organized and clear, making it easier for developers to follow and run the project in different environments.

## API Documentation

The backend API provides the following endpoint:
**GET** `/api/city`: Retrieves JSON data containing information about various cities.

## Technologies Used

- Backend: Node.js, nest.js (TypeScript), Typeorm, class-validator, jest
- Frontend: React.js (TypeScript), MUI, jest, react-query

## Contributing

Contributions to this project are welcome! If you find any bugs or have suggestions for improvements, please open an issue. If you'd like to contribute code, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://chat.openai.com/LICENSE) file for details.

## Contact

If you have any questions or need further assistance, feel free to contact me at [erfan.seidipoor@gmail.com](mailto:erfan.seidipoor@gmail.com).

you can see final version of this software: [http://161.97.108.195:4442/](http://161.97.108.195:4442/)
