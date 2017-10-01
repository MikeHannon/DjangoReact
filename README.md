# Django with React
There are a bunch of resources out there for getting started with Django and React and using the djangorestframework to generate an API.  This repo. is a consolidation of some of these strategies.  
# Security
Security maybe a bit lacking on the Django Side.  I am using this, django-cors-headers coupled with weak token based authentication which might open up security holes.  If you choose to use this repo for anything beyond learning how to connect react and django, please research the security issues!
For local development I am allowing localhost -> localhost connections which are prevented by most browsers for security reasons.
# Database
This project uses a postgres Database and environmental variables that are stored in a separate file (.env).  The .env file looks something like this: 
```
{
  export DB_NAME='DBName'
  export DB_USER='UserName'
  export DB_PASS='UserPassword'
}
```
These data are then used by the settings.py file.

```
DB_NAME = os.environ['DB_NAME']
DB_USER = os.environ['DB_USER']
DB_PASS = os.environ['DB_PASS']
```

# React

I am using react, redux (for global state), axios (for network communication), and react-redux as the major pieces.  As you work through the repo and commits, you may see me pull in redux-saga, or pull out redux completely.  My company uses redux and redux-saga and I am using this project to play around with some of these patterns.  I'll try and make the commit history relatively clear! 

# Initial resource that I used to get started

'https://hackernoon.com/creating-websites-using-react-and-django-rest-framework-b14c066087c7'
