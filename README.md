# URL_Shortener

URL Shortener service that takes in a valid URL and returns a shortened URL, redirecting the user to the previously provided URL. 

Also keep track of total visits/clicks on the URL

## Routes 

### POST /URL  
Generates a new short URL and returns the shortened URL in the format example.com/random-id.

### GET /:id 
Redirects the user to the original URL

### GET /URL/analytics/:id
Returns the clicks for the provided short id

## Server Side rendering with EJS
Creating UI and Integrating Server Side Rendering with NodeJS with EJS
Fast Rendering HTML on the UI with EJS with static router for better user experience

## AUTH

Authentication Patterns:
1. Statefull - Which maintains state or data on the server side
2. Stateless - Which has no data on the server side

### Statefull Auth

                  username/password
              ----------------------------> 
 client                                      server
 uid:367      <----------------------------
                    session uid

Server can send session uid via a response, cookie or headers

### Express Flow of Auth


client ---------------------> Auth Middleware ----------------> Endpoint Route
        Checks for cookie
        value or uid, if
        valid it calls 
        next() else rejects 
        the request

### Problems with statefull auth

1. The data is lost when we restart the server
2. It uses data on the server which is not good to consider as we have limited memory on the server

### Stateless Auth

In the token it has the user data in encrypted format so that we dont have to store anything on the server side. It is accessible to everyone but it can not be manipulated or changed by anyone. Only with the secret key we can modify the token and manipulate the data. Never share tokens with anyone. Tokens can stay for a longer period. Use case: serverless framework, social media.

This can be achieved with the help of JSON WEB TOKENS (JWT)