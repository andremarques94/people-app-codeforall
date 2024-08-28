## Backend

Create a REST API backed by a MySQL OR PostgreSQL instance that exposes the following data:

- People: an endpoint providing a list of available people information with some overview data.
- People Detail - an endpoint providing all the fields related to a Person.

Note:

- The source of the data served by the API should always be PostgreSQL/MySQL.

## Frontend

Create a Single Page Application application:

- It must show a list of people fetched from your REST API
- The user can see the details of the person (Modal) by clicking on said person on the list.
- Extra: Implement dark mode
- Extra: The list items should be draggable in order to be sorted
- You have to respect the wireframes the best you can.

Note:

- You can use whatever frontend framework or library for the task, React would be nice.
- You can use any npm module you see fit.
- You can use a CSS pre/post-processor if you want.
- You can use any build tool but I recoment Vite.
