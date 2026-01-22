# EasyShop E-Commerce Web Applycation

A modern, responsive e-commerce application built with React, Redux, and Tailwind CSS. This project provides a complete shopping experience, from browsing products to adding items to a cart.

## Live Demo

Check out the live version of the application: [https://nayeem-e-commerce.netlify.app/](https://nayeem-e-commerce.netlify.app/)

## Features

*   **Browse Products:** View a wide range of products with details and images.
*   **Product Categories:** Filter products by category.
*   **Shopping Cart:** Add products to a shopping cart and manage them.
*   **Single Product View:** View detailed information about a single product.
*   **User Authentication:** Secure user registration and login using **Firebase Authentication**.
*   **Responsive Design:** A clean and modern UI that works on all screen sizes, built with Tailwind CSS and DaisyUI.
*   **Client-Side Routing:** Seamless navigation with React Router.
*   **State Management:** Centralized application state management with Redux.

## Technologies Used

*   **Core:**
    *   [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
    *   [Vite](https://vitejs.dev/) - A fast build tool for modern web development.
*   **Routing:**
    *   [React Router](https://reactrouter.com/) - For client-side routing and navigation.
*   **State Management:**
    *   [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps.
    *   [React-Redux](https://react-redux.js.org/) - Official React bindings for Redux.
*   **Styling:**
    *   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
    *   [DaisyUI](https://daisyui.com/) - A component library for Tailwind CSS.
*   **Authentication:**
    *   [Firebase Authentication](https://firebase.google.com/docs/auth) - For secure user login and registration.
*   **Icons:**
    *   [React Icons](https://react-icons.github.io/react-icons/) - A collection of popular icon libraries.
*   **Linting:**
    *   [ESLint](https://eslint.org/) - For identifying and reporting on patterns found in ECMAScript/JavaScript code.

## Project Structure

The project follows a standard React project structure:

```
/
├── public/               # Static assets and data
├── src/
│   ├── assets/           # Images and other assets
│   ├── Components/       # Shared UI components
│   ├── Context/          # React context providers
│   ├── Hooks/            # Custom React hooks
│   ├── Layout/           # Main application layout
│   ├── Page/             # Application pages
│   ├── redux/            # Redux store, actions, and reducers
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js and npm installed on your machine.

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/NayeemWD/e-commerce.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Start the development server
    ```sh
    npm run dev
    ```

## Firebase Integration

This project uses Firebase for user authentication. To connect it to your own Firebase project, you will need to:

1.  Create a new project on the [Firebase Console](https://console.firebase.google.com/).
2.  Enable Email/Password authentication in the "Authentication" section.
3.  Get your Firebase project configuration.
4.  Create a `firebase.config.js` file in the `src` directory and add your configuration like this:

    ```javascript
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    export default app;
    ```
5.  Install the Firebase SDK:
    ```sh
    npm install firebase
    ```

Now you can import the `app` object in your application to interact with Firebase services.