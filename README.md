# Micro-Frontend Application

This project is a micro-frontend architecture application developed using React. It consists of multiple micro-frontends for products, authentication, and orders, all integrated into a parent application. This architecture allows for modular development and independent deployments of each micro-frontend.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- Modular architecture with separate micro-frontends for different functionalities.
- React Router for seamless navigation between components.
- Redux for state management across the application.
- Lazy loading of micro-frontends to improve performance.
- Responsive design for optimal user experience.

## Installation

To install the project and its dependencies, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Enable Corepack (if needed):**

   If you are using Yarn 3 or above, enable Corepack by running:

   ```bash
   corepack enable
   ```

3. **Install dependencies:**

   Run the following command to install all dependencies for the parent and child micro-frontends:

   ```bash
   yarn run install:all
   ```

## Running the Application

To start the application, run:

```bash
yarn start:containers
```

This command will start the parent application along with the integrated micro-frontends.

## Testing

To run the tests for the application, use the following command:

```bash
yarn test
```

This command will execute all the unit tests defined in the application, including those for the micro-frontends.

## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request. Make sure to follow the coding standards and include relevant tests for any new features or changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
