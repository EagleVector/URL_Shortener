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
2. Stateless - Which has no data

1. Statefull

                  username/password
              ---------------------------->` 
 `client`                                      `server`
 `uid:367`    `<----------------------------`
                    `session uid`

Server can send session uid via a response, cookie or headers

## Express Flow of Auth


client ---------------------> Auth Middleware ----------------> Endpoint Route
        Checks for cookie
        value or uid, if
        valid it calls 
        next() else rejects 
        the request