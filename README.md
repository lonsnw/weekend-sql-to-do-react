# <center> LET'S GET STUFF DONE </center>
### <center> TO DO APP </center>

## Description

_Duration: 3 Week Sprint_

This is an application that allows the user to create a to do list.  Users can:

 * Add tasks to the list
 * Check off tasks they have completed
 * Uncheck tasks if they discover they're incomplete
 * Archive tasks on their to do list
 * View archived tasks on a list of completed and archived tasks
 * Delete tasks from the archive

The app stores all tasks and their status on a database until they are deleted.  Documentation provides sample content for the database (which is also the checklist for building the app).  The app uses both a checkbox and styling to indicate which tasks are complete and which are incomplete.

This app is not currently deployed.  It was built in response to this assignment: [Assignment Instructions](./INSTRUCTIONS.md).

## Screen Shot

List with provided content loaded:
<br />
<center><image src=public/images/default-loaded.png width=80%></center>
<br />
When entering a new task:
<br />
<center><image src=public/images/task-input.png width=80%></center>
<br />
List of completed/archived tasks:
<br />
<center><image src=public/images/done-list.png width=80%></center>
<br />

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/download/)

## Installation

The application has been tested and run on a local machine using the browser. It may be deployed in the future but currently is only available locally.

1. Clone down a version of this repository
2. Create a database named `weekend-to-do-app`
3. Create and populate a table called `tasks` and a table called `finished`  
    - This project is built on [Postgres](https://www.postgresql.org/download/), which you will need to install to use the app
    - The `database.sql` file contained in this repository provides all of the necessary queries for creating the tables needed to run the app
    - The queries will also populate the `tasks` table with sample data
    - The `finished` table will be populated when the app is used, so no sample data is needed or provided
4. Open in your editor of choice and run an `npm install`
5. Run `npm run server` in your terminal
6. Run `npm run client` in your terminal
7. Navigate to the localhost port provided by your terminal when you initiate your client.  The default port when running Vite, for example, is `http://localhost:5173/`

## Usage
I'm a developer creating an app.  I'd like to make a to do list that tracks all of my tasks for building out features.  

I want to be able to check tasks off when I complete them and have that completion status stored.  Sometimes I discover a bug after I've checked off a task, so I need to be able to uncheck the task so that my list of tasks accurately shows the features that are still in progress and the steps I plan to take to build (and debug) them.

I also want to be able to add tasks to the list, in case I forgot to populate them into the database at the start.  I like being able to see what I've accomplished, so I want an archive feature that shows me everything I've marked fully complete.  And, if I need to, I can delete tasks that I added in error or that are for a function I'm no longer planning to build.

1. Follow the installation instructions above
2. Enter each task into the input field at the top of the page
3. Select `Add to list` to add the new task to the end of the to do list
4. When each task is completed, check it off using the checkbox in that task's row
5. If part of the feature needs debugging, uncheck the task using the checkbox
6. If a task is complete and doesn't need debugging, select the `Archive` button in that task's row
7. Track everything that's been accomplished in the archive list
8. If a task needs to be fully deleted, add it to the archive by selecting `Archive` in the task's row and then select `Delete` from its row once it's been moved to the archive

## Technologies

- PostgreSQL
- Express
- React
- Node

## Documentation
This documentation was built following a [provided template](https://github.com/PrimeAcademy/readme-template/blob/main/README.md).   It has been edited for style,  consistency, and to provide all relevant details.

## Support
If you have suggestions or issues, please contact me.