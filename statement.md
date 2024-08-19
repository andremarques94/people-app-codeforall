## Backend

Create a Node.js REST API backed by a MySQL OR PostgreSQL instance that exposes the following data:  

- People: an endpoint providing a list of available people information with some overview data and where you can add a new person.
- People Detail - an endpoint providing all the fields related to a Person, you can also edit the person and delete it.

Note:
The source of the data served by the API should always be PostgreSQL/MySQL.
Pagination should be taken in consideration (Extra)


## Frontend

Create a Single Page Application application:

- It must show a list of people fetched from your REST API
- The list items should be draggable in order to be sorted
- The user can see the details of the person (Modal) by clicking on said person on the list.
- The user can create a new Person using a form and store them using the REST API
	- Insert an Add Person button which opens the modal with the form.
	- You should validate the form fields
	- The open modal should be consistent with the one used to display the person details
- The user can delete a person.


Note:

- You can use whatever frontend framework or library for the task, React would be nice.  
- You can use any npm module you see fit. 
- You can use a CSS pre/post-processor if you want. 
- You can use any build tool but I recoment Vite. 
	