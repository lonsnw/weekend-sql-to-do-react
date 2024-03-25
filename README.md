# LET'S GET STUFF DONE: TO DO APP

## Description

_Duration: 3 Week Sprint_

This is an application that allows the user to create a to do list.  Users can:

 * Add tasks to the list
 * Check off tasks they have completed
 * Uncheck tasks if they discover they're incomplete
 * Delete tasks from the list

The app stores all tasks and their status on a database.  Documentation provides sample content for the database (which is also the checklist for building the app).  The app uses both a checkbox and styling to indicate which tasks are complete and which are incomplete.

This app is not currently deployed.

## Screen Shot

List with provided content loaded:
<br />
<image src=public/images/default-loaded.png width=80%>
<br />
When entering a new task:
<br />
<image src=public/images/task-input.png width=80%>
<br />

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/download/)

## Installation

The application has been tested and run on a local machine using the browser. It may be deployed in the future but currently is only available locally.

1. Clone down a version of this repository
2. Create a database named `weekend-to-do-app`
3. Create and populate a table called `tasks`  
    - This project is built on [Postgres](https://www.postgresql.org/download/), which you will need to install to use the app
    - The `database.sql` file contained in this repository provides all of the necessary queries for creating the table needed to run the app
    - The queries will also populate the table with sample data
4. Open in your editor of choice and run an `npm install`
5. Run `npm run server` in your terminal
6. Run `npm run client` in your terminal
7. Navigate to the localhost port provided by your terminal when you initiate your client.  The default port when running Vite, for example, is `http://localhost:5173/`

## Usage
I'm a developer creating an app.  I'd like to make a to do list that tracks all of my tasks for building out features.  

I want to be able to check tasks off when I complete them and have that completion status stored.  Sometimes I discover a bug after I've checked off a task, so I need to be able to uncheck the task so that my list of tasks accurately shows the features that are still in progress and the steps I plan to take to build (and debug) them.

I also want to be able to add tasks to the list, in case I forgot to populate them into the database at the start, and remove tasks if I find that I have duplicates or if I no longer want to build out the associated feature.

1. Follow the installation instructions above
2. Enter each task into the input field at the top of the page
3. Select `Add to list` to add the new task to the end of the to do list
4. When each task is completed, check it off using the checkbox in that task's row
5. If part of the feature needs debugging, uncheck the task using the checkbox
6. If a task needs to be removed, click on the `Delete` button in that task's row

## Technologies

- PostgreSQL
- Express
- React
- Node

## Support
If you have suggestions or issues, please contact me.