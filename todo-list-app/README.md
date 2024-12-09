# React-Redux Node.js Todo List

This project is a Todo List application built with React, Redux, and Node.js. It allows users to add, toggle, and delete tasks. The backend is implemented using Express.js and provides a RESTful API for managing todos.

## Project Structure

```
backend/
  .env
  .gitignore
  package.json
  server.mjs
todo-list-app/
  .env
  .gitignore
  config-overrides.js
  package.json
  public/
    index.html
  src/
    App.css
    App.jsx
    components/
      TodoForm.jsx
      TodoItem.jsx
      TodoList.jsx
    index.css
    index.js
    store.js
  webpack.config.js
```

## Backend

The backend is a Node.js application using Express.js to provide a RESTful API for managing todos.

### Setup

Navigate to the `backend` directory:
`cd backend`

### Install dependencies:

`npm install`

### Start the server:

`npm start`

The server will run on http://localhost:9091.

### API Endpoints

**_GET_** /api/todos: Retrieve all todos.
**_POST_** /api/todos: Create a new todo.
**_PUT_** /api/todos/:id: Update a todo by ID.
**_DELETE_** /api/todos/:id: Delete a todo by ID.

## Frontend

The frontend is a React application using Redux for state management.

### Setup

Navigate to the `todo-list-app` directory:
`cd todo-list-app`

### Install dependencies:

`npm install`

### Start the development server:

`npm start`

The application will run on http://localhost:3000.

### Components

**_App.jsx_**: Main component that fetches todos and renders TodoForm and TodoList.
**_TodoForm.jsx_**: Form component for adding new todos.
**_TodoItem.jsx_**: Component for displaying individual todo items.
**_TodoList.jsx_**: Component for displaying the list of todos.

### State Management

The application uses Redux for state management. The store is defined in `store.js` and includes actions for adding, removing, and toggling todos.

### Polyfills

In `index.js`, polyfills for `Buffer` and `process` are added to ensure compatibility with browser environments:

### Styling

The application uses CSS for styling. The main styles are defined in `App.css` and `index.css`.

### UI and Dynamic UX

The application includes various animations and dynamic user experience enhancements to improve usability and aesthetics:

- **Hover Effects**: Todo items have hover effects that change the background color and slightly elevate the item to provide visual feedback.
- **Delete Button Animation**: The delete button slides in from the left when hovering over a todo item, making it easily accessible.
- **Complete Button Animation**: The complete button changes color and scales up slightly when toggled, providing a visual indication of the action.
- **Completed State Animation**: When a todo item is marked as completed, it pulses briefly to draw attention to the change.
- **Responsive Design**: The layout adjusts for different screen sizes, ensuring a good user experience on both mobile and desktop devices.

### License

This project is licensed under the MIT License. See the LICENSE file for details.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request.

### Learn More

To learn more about React, Redux, and Node.js, check out the following resources:

React Documentation
Redux Documentation
Express.js Documentation
