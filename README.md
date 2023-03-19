# Order Management App

This is a web application built with React and TypeScript for managing orders. It allows users to view a list of orders and search for specific orders based on their ID. The application also supports sorting the list of orders by clicking on column headers.
## Installation
### To run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies using npm install.
3. Start the development server using npm run start.
4. Open your web browser and navigate to http://localhost:3000.

### Usage

Upon loading the application, you will be presented with a list of orders. You can search for a specific order by typing its ID in the search field and pressing enter. The list will then be filtered to show only the matching orders.

You can also sort the list of orders by clicking on any of the column headers. Clicking on a column header once will sort the list in ascending order by that column. Clicking on the same column header again will reverse the order to descending.
Code structure

### The application is structured into several components, including:

1. `App`: The root component that renders the entire application.
2. `Table`: Renders the list of orders and handles searching and sorting.
3. `TableHead`: Renders the column headers for the list of orders.
4. `sortingIcon`: Renders an up or down arrow to indicate the current sorting direction.

The data for the list of orders is stored in the data.ts file as an array of Order objects. The Order interface defines the shape of each order object.
### Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes. 