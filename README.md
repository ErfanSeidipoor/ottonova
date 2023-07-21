# Ottonova JavaScript Coding Challenge - City Data Display

![Ottonova](ottonova.jpg)

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/ErfanSeidipoor/ottonova)](https://github.com/ErfanSeidipoor/ottonova/issues)
[![GitHub stars](https://img.shields.io/github/stars/ErfanSeidipoor/ottonova)](https://github.com/ErfanSeidipoor/ottonova/stargazers)

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

2. Install dependencies:

```bash
npm install
```

### Usage

3. Start the backend server

```bash
nx serve back
```

4. Start the frontend development server

```bash
nx serve front
```

## API Documentation

The backend API provides the following endpoint:
**GET** `/api/cities`: Retrieves JSON data containing information about various cities.

## Technologies Used

- Backend: Node.js, nest.js (TypeScript), Typeorm, class-validator, jest
- Frontend: React.js (TypeScript), MUI, jest, react-query

## Contributing

Contributions to this project are welcome! If you find any bugs or have suggestions for improvements, please open an issue. If you'd like to contribute code, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://chat.openai.com/LICENSE) file for details.

## Contact

If you have any questions or need further assistance, feel free to contact me at [erfan.seidipoor@gmail.com](mailto:erfan.seidipoor@gmail.com).
