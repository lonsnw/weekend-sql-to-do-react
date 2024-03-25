DROP TABLE IF EXISTS tasks;

CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (300) NOT NULL,
	"completion" BOOLEAN DEFAULT FALSE
);

INSERT INTO tasks ("task", "completion")
VALUES 
('SQL to create the database table', TRUE),
('Create a database.sql file and add the create table SQL', FALSE),
('Add sample data with insert statements', FALSE),
('Add insert statements into the database.sql file', FALSE),
('Create a GET route in the todo.router.js file to return sample data', FALSE),
('Test the GET route with Postman', FALSE),
('Add useEffect and Axios GET to the App.jsx', FALSE),
('Display items on the page with .map', FALSE),
('Include a column with a delete button', FALSE),
('Add input fields to the page', FALSE),
('Create a POST route in App.jsx for adding tasks', FALSE),
('Create a POST route in the todo.router.js file to send the tasks to the database', FALSE),
('Test the POST route with Postman', FALSE),
('Create a PUT route in App.jsx for changing task status', FALSE),
('Create a PUT route in the todo.router.js file to update task status in the database', FALSE),
('Test the PUT route with Postman', FALSE),
('Create a DELETE route in App.jsx for removing task from the list', FALSE),
('STRETCH: Can I create a second database that this is moved to and then display it in a completed tasks section of the page?', FALSE),
('Create a DELETE route in the todo.router.js file to remove task from the database', FALSE),
('Test the DELETE route with Postman', FALSE),
('Update styling', FALSE);

CREATE TABLE "finished" AS TABLE "tasks" WITH NO DATA;
