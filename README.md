
# Todo App Exercise
## Exercise Description
Create a React app that presents a todo list, and every list item has a "more detailes" button that navigates to a "Details" page that presents the title and description of the task item.
The "Detailes" pages also have a "go back" button that navigates to the main page.
Use mock data (mock data was supplied in the exercise)

## Time constraines
Develop the app in about 3 hours.

### My Component Tree

I designed the 2-page app with the routing on the "App.tsx" component and the Home component renders the TodoList component, that renders Todo component.
The routing to TodoDetails component is managed in the App component.

<img width="707" alt="Screenshot 2024-12-08 at 16 46 43" src="https://github.com/user-attachments/assets/639cc72f-993d-4d59-886b-0c44b743f808">

# Run Instructions - UPDATE

* Clone this repo

## Client Run Instructions:

* `cd client`
* Inside the client directory: `npm install`
* `npm run dev`

## NEW! Server Run Instructions:

* `cd server`
* `node index.js`