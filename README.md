# Roman Numeral Converter

This project is a **Roman Numeral Converter** client application that is built using **React** and **Adobe React Spectrum** for the front-end UI. The application allows users to input a number, and it converts it into its Roman numeral equivalent. It also provides real-time front-end validation and error handling.

## How to Build and Run Your Project

### Prerequisites

To run this project, you’ll need:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### For Local Development

1. Clone the repository:

```bash
git clone https://github.com/yourusername/roman-numeral-converter.git
```

2. Install all dependencies

```bash
npm install
```

3. Running it locally

```bash
npm start
```

---

## Dockerization

To make the project easy to deploy in any environment, this application has been Dockerized. Docker allows you to package the app along with its dependencies in a container, making it easier to run on any system without worrying about specific configurations.

### Prerequisites

Before running the Docker container, make sure you have **Docker** installed on your machine. You can download Docker from [here](https://www.docker.com/products/docker-desktop).

### Building the Docker Image

To build the Docker image for the project, follow these steps:

1. **Build the Docker Image**:

   In the root directory of your project, run the following command:

   ```bash
   docker build -t roman-numeral-converter-client .

   ```

   After building the image, you can run the Docker container with the following command:

   ```bash
   docker run -p 3000:3000 oman-numeral-converter-client

   ```

   This command runs the container and maps port 3000 inside the container to port 3000 on your local machine, making the app accessible at http://localhost:3000.

---

## Engineering and Testing Methodology

### Engineering Approach

This project uses **React** to manage the application’s UI and **Adobe React Spectrum** as the design system for consistent styling and Theme management as well as the ready to go component.

- **Component Design**: Components are modular and reusable. The main components include `NumberConverterForm`, `Navbar`, and `ErrorBoundary`.
- **Custom Hooks**: The project uses custom hooks like `useRomanNumeralConverter` for the logic of converting numbers to Roman numerals thugh an api call and `useTheme` for managing dark mode. Those Custom Hooks will increase the reuse ability.
- **State Management**: We use React's `useState` for local state and context (`ThemeContext`) for managing global app state (such as dark/light mode). Redux will be another good option to use if the project size is getting bigger in the futrue.

### Testing Methodology

- **Unit Tests**: We use **Jest** and **React Testing Library** to test components, hooks, and functions. Tests are designed to cover valid input, error handling, edge cases, and interactions.
- **Integration Tests**:
- **Error Handling**: Tests validate graceful error handling when invalid inputs or server failures occur.

### Running Tests

To run the tests:

```bash
npm test

```

This will run all tests and show the results in the terminal. We also use code coverage to ensure that critical logic is well-tested.

---

## Packaging Layout

The project is organized as follows:

```plaintext
root
├─ src
│  ├─ components
│  │  ├─ Navbar
│  │  │  ├─ Navbar.tsx
│  │  │  └─ Navbar.test.tsx
│  │  ├─ ConverterCard
│  │  │  ├─ NumberConverterForm.tsx
│  │  │  └─ NumberConverterForm.test.tsx
│  │  ├─ ErrorBoundary.tsx
│  ├─ context
│  │  └─ ThemeContext.tsx
│  ├─ lib
│  │  └─ hooks
│  │     ├─ useRomanNumeralConverter.ts
│  │     └─ useTheme.ts
│  ├─ App.tsx
│  ├─ index.tsx
│  ├─ index.css
│  ├─ reportWebVitals.ts
│  └─ setupTests.ts
├─ public
│  ├─ index.html
│  └─ favicon.ico
├─ package.json
├─ package-lock.json
├─ README.md
├─ .gitignore
└─ tsconfig.json


```

- **`src/components/`**: Contains all the React components of the app.
- **`src/context/`**: Contains the context files for global state management (e.g., theme).
- **`src/lib/hooks/`**: Contains custom hooks for reusable logic (e.g., Roman numeral conversion).
- **`src/App.tsx`**: The main application component that ties together the UI and logic.
- **`tests/`**: Contains unit and integration tests.

---

## Dependency Attribution

### Why Adobe React Spectrum?

#### Key Benefits I found so far:

- **Ease of Use**: Pretty good ready to use component with consistent styling.
- **Dark Mode Support**: The `Provider` component in Spectrum is pretty good for theme management and really straightforward to implement dark mode and light mode without a lot of styling.
- **Customization**:For the theme while Adobe Spectrum comes with a default theme, it can be easily customized to fit the project’s needs. Also provide set of react hooks that make it super easy to create your own components

### Other Dependencies:

- **React**: Used for building the user interface and managing the component lifecycle.
- **@adobe/react-spectrum**: UI component library for React, providing accessibility-focused components.
- **Jest**: A testing framework used for unit and integration tests.
- **React Testing Library**: A library for testing React components in a way that resembles how users interact with them.
- **TypeScript**: For type safety and enhanced developer experience.

### DevDependencies:

- **@testing-library/jest-dom**: Extends Jest's assertions with DOM-specific matchers.
- **@types/react, @types/jest**: Provides TypeScript typings for React and Jest.
- **identity-obj-proxy**: Helps with styling during tests.

---
