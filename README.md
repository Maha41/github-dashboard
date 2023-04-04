# github-dashboard

A GitHub dashboard using React Chakra UI app pulling data from PostgreSQL using Tortoise ORM, Pydantic, and FastAPI could be a powerful tool for developers and project managers alike. The app would use FastAPI to create a RESTful API that exposes data from a PostgreSQL database, accessed using Tortoise ORM, to a React frontend. The Chakra UI framework would be used to create an intuitive, responsive, and visually pleasing user interface.

The PostgreSQL database would contain data extracted from the GitHub API, such as repositories(issues, pull requests, and contributors could be added in future) and last scrapted_at details. The database schema would be defined using Tortoise ORM, a powerful and easy-to-use Python ORM that supports asynchronous IO. Pydantic models would be used to validate incoming data and to serialize data to JSON for transmission to the frontend.

The FastAPI backend would be responsible for serving the React frontend with the necessary data to populate the dashboard. The API endpoints would be defined using FastAPI's intuitive and easy-to-use decorator syntax. The endpoints would use Tortoise ORM to access the PostgreSQL database, retrieve the necessary data, and return it as JSON.

The React frontend would be built using the Chakra UI framework, a component library that provides a set of reusable, composable, and customizable UI elements. The dashboard would consist of multiple pages, each displaying different data extracted from the GitHub API. The pages would be designed to be intuitive and easy-to-use, with clear and concise visualizations of the data.

Overall, a GitHub dashboard React Chakra UI app pulling data from PostgreSQL using Tortoise ORM, Pydantic, and FastAPI would be a powerful and versatile tool for developers and project managers to track project progress, identify bottlenecks and issues, and make data-driven decisions.
