# Backend domentation 

In 'back' folder you must execute 'npm install' command in order to install the required dependencies. 
Then create '.env' file, in which the following enviroment variables must be defined: 

```
    DB_USER= ""
    DB_PASSWORD= ""
    DB_NAME= ""
    DB_HOST= ""
    PORT= 3001
```

You must replace the first three values with your corresponding Postgres credentials,
and the database name (`DB_NAME`) can be whatever you prefer (you must create that data base on your computer!).


# Routes

In order to get access to all the available routes, you must first set a session using either one of the following
routes: /session/localsignin, /session/signup. 
If you try reach any other route without being authenticated, the response will be "Access denied" (status 400).


### Sign up: 

- Method: post
- Route: /session/signup

You must send through BODY the new user data. For exemple: 

```
{
  firstname: "someFirstname",
  lastname: "lastname",
  email: "someEmail@mail.com",
  password: "Password1234",
  phone: "112223344",
}
```

### Sign in:

- Method: post
- Route: /session/localSignin

You must send through __body__ the user credentials. For example:

```
{
  email: "someEmail@mail.com",
  password: "Password1234"
}
```






