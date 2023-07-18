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

Client (username/password)--> Server

Client <----(session uid) Server

Server can send session uid via a response, cookie or headers

### Express Flow of Auth


client (Checks for cookie value or uid, if valid it calls next() else rejects the request) ---> Auth Middleware ----> Endpoint Route

### Problems with statefull auth

1. The data is lost when we restart the server
2. It uses data on the server which is not good to consider as we have limited memory on the server

### Stateless Auth

In the token it has the user data in encrypted format so that we dont have to store anything on the server side. It is accessible to everyone but it can not be manipulated or changed by anyone. Only with the secret key we can modify the token and manipulate the data. Never share tokens with anyone. Tokens can stay for a longer period. Use case: serverless framework, social media.

This can be achieved with the help of JSON WEB TOKENS (JWT)

## AUTH ARCHITECTURE

DataBase(checks if the user is valid or not)  <---  Server (parses the request)  <--- Clinent (sends username / password)

If the request is valid Server will create a token (JWT) which will have login cred of the user and then it will try to ship it back to the user. Everything happens in the server.

Now server can send the token in 2 ways back to the client
 1. In the form of `cookie`
 2. In the form of response

### COOKIE

Cookies are domain specific that means it only gets send/recieved to/from respective domains.

Cookies are equipped with their custom expiration date and many more.

Cookies are automatic and are only for browsers

### RESPONSE

Simple response can be sent in the form of json inside req header
AUTHORIZATION comes into picture with the auth Bearer token inside headers.

We can use local storage to save our auth/bearer token in case of browsers otherwise we can use mobile device memory to save the token

## AUTHENTICATION vs AUTHORIZATION

Authentication is the process of checking if the user is authenticated i.e having a valid account with correct cred.

Authorization is the process of checking if the user is authorized to use a particular resource inside the domain.

## Admin privilege:

`/admin/urls/`

List of all the user details and analytics of urls generated.