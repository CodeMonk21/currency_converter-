# Currency Convertor

Welcome to the Currency Convertor project! This repository houses a React-based application designed for efficient and accurate currency conversion. The application leverages remarkable component reusability and advanced concepts like custom hooks to ensure a clean and maintainable codebase.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Introduction

The Currency Convertor application allows users to convert amounts between different currencies using up-to-date exchange rates. The project demonstrates effective use of React's component-based architecture and custom hooks for state management and side effects.

## Features

- **Real-time Currency Conversion:** Converts currency values based on the latest exchange rates fetched from a public API.
- **Component Reusability:** Extensive use of reusable components to keep the code DRY (Don't Repeat Yourself).
- **Custom Hooks:** Utilizes custom hooks for API calls and state management, enhancing code modularity and readability.
- **Responsive Design:** Ensures a seamless user experience across various devices.

## Technologies Used

- **Vite + React**: For a fast and modern development experience.
- **Custom Hooks**: For managing API calls and other reusable logic.
- **Fetch API**: For making HTTP requests to the currency conversion API.
- **Tailwind CSS**: For beautiful and responsive design.

## Installation

To get a local copy up and running, follow these simple steps:

1. **Clone the repository:**
   ```sh
   git clonehttps://github.com/CodeMonk21/currency_converter-.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd currency-convertor
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```

## Usage

To start the application, run:
```sh
npm run dev
```
The application will be available at `http://localhost:3000`.

## Project Structure

```
currency-convertor/
├── public/
├── src/
│   ├── components/
│   │   ├── InputBox.jsx
│   ├── hooks/
│   │   ├── useCurrency.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── tailwind.config.js
├── index.html
├── vite.config.js
├── package.json
├── README.md
```

- **components/**: Contains reusable React components.
- **hooks/**: Contains custom hooks like `useCurrencyConversion.js` for handling API calls and logic.
- **index.css**: Includes Tailwind CSS configurations and custom styles.
- **tailwind.config.js**: Configuration file for Tailwind CSS.
- **vite.config.js**: Configuration file for Vite.

## License

CodeMonk21
