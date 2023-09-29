# ViNDU Chat:
# A Real-time Chat Application

# About ViNDU:
------
ViNDU Chat Application is an exciting and engaging web-based messaging platform that facilitates instant real-time Communication between users and ensures a seamless and responsive chatting experience 


# Swagger UI: 
Explore and interact with the API using Swagger UI. The API documentation is available at http://localhost:8000/swagger/ when running the development server.

# JWT Authentication: 
To access protected endpoints, you need to obtain an access token. You can do this by logging in or signing up as a user. The access token should be included in the request headers for authentication.


# Technology Used 
-----
Django Rest Framework-DRF
Python Django Django REST framework Other dependencies (specified in requirements.txt)

# Getting Started:

--Prerequisites Before getting started, make sure you have the following installed:

--Navigate to the project directory:

--cd ViNDU ChatAPP

---Create and activate a virtual environment:

---python3 -m venv env

----source env/bin/activate (Linux/macOS)

----env\Scripts\activate (Windows)

----Install the project dependencies:

-----pip install -r requirements.txt

-----Apply database migrations:

------python3 manage.py migrate

-------Create a superuser for administrative access: python3 manage.py createsuperuser

--------Start the development server:

---------python3 manage.py runserver
# Databases
-----
PostgresSQL

# Authentication
------
Json Web token

# Endpoints:
Access the website at http://localhost:8000/swagger

# Error Handling:
The API returns standard HTTP response codes for success and error cases. In case of an error, a JSON response will include an error field with a description of the problem.

# Deployment
------
ViNDU Chat_api is deployed on vercel and the endpoints are stated below

API Root: https://ViNDU Chat-api.vercel.app/

Swagger Ui: https://ViNDU Chat-api.vercel.app/swagger..