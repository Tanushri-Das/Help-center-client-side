# React Assignment
1. How can you implement shared functionality across a component tree ?

We can implement shared functionality across a component tree by using:

* Context API : Create a context to provide and consume shared values or functions throughout the component tree.
* Custom Hooks : Encapsulate reusable logic in custom hooks and use them in any component that needs the functionality.
* Render Props : Use render props to pass shared logic or data to children components.
* Utility Functions : Create utility functions or classes and import them into components where needed.

2. Why is the useState hook appropriate for handling state in a complex component ?

In React, the useState hook is a function that allows us to add state management to functional components. It's one of the most essential hooks provided by React and enables us to manage and update the state of our components without using class components.

# Overview of the project
This project is a Help Center application where users can submit new requests, view all sections, and retrieve details of a specific card by its title. The project is built using React.js, Tailwind CSS, Node.js, Express.js, Mongoose, and MongoDB.

# Clone the Repository
Client side github link : https://github.com/Tanushri-Das/Help-center-client-side

# Install Dependencies
Client-Side Setup

Navigate to the client-side directory: 

cd Help-center-client-side

npm install or yarn install

# Start the Client
In the client-side directory, start the React development server: npm run dev

This will run the client at http://localhost:5173

# Features
1. Add New Sections: Users can submit new requests by clicking the "Submit a Request" button in the header to add sections to the Help Center.

2. View All Sections: Users can view all the sections in the UI.

3. Get Details by Title: Users can retrieve the details of a single card by its title.