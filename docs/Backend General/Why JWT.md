# Why do we use JWT?
JWT, or JSON Web Token, is a widely adopted cross-origin authentication solution. This article aims to provide a comprehensive understanding of its pros and cons.


## Structrue of JWT
The structure of JWT has 3 parts. Headers, Payload and Signature.
### Header
The header is a JSON object that records metadata such as the signature algorithm and token type. This information is then encoded into a string using the Base64 algorithm.

### Payload
The Payload is also a JSON object, recording data exchanged with the server, including expiration time, issued time, and JWT ID. It can also accommodate business data such as name and birthday. 

However, it's essential to note that this section is not encrypted, so sensitive information should not be placed here.


### Signature
The Signature ensures data integrity and prevents malicious modifications. The server assigns a secret known only to itself, using a signature algorithm to sign the header, payload, and secret. The resulting output is referred to as the Signature.

### Concatenation

The final step is to concatenate with the following format:

`Header.Payload.Signature`

Notice, the Header and Payload part is encoded with the Base64 algorithm.


## Why is JWT popular?

### In the Past
Traditional authentication procedures are:
1. Client send username and password to the server
2. If it could be authenticated, save user authentication data into current **session**
3. Server return a **session id** to the client's cookie.
4. After that, user will send cookie which contains session id to the server for each request.
5. The server use session id from the cookie to distinguish who the user is.

This worked well for single-server authentication.  

However, if the business has two websites and require you implement a feature, which is login on one of website so that we don't need to login again on the other website. 

An important thing to notice is, since we save the session id in the cookie, we cannot send the cookie to the other website. Why so? Because cookie does not support cross origin.

JWT is a solution saves all the data on the client side. Every time a user send a request to the server, it comes with the token. We don't need to store anything in the persistent layer. The only thing we need to do is just to redo the structure process, and compare with the token passed along with the request.

### Front-End and Back-End Separation
Modern architectures often separate front-end and back-end components.

It's a simple, clear architecture. Because the back-end part only need to provide APIs, and the front-end part only need to invoke those APIs and convert response into proper view for the users.

We have to understand this separation means we have to run front-end and back-end in two different servers. This will cross origin. 

However, using JWT we simply need to attach the token along with the request header to invoke API.


### Mobile Platform
As we might know, cookies are not supported in mobile platforms like iOS/Android. In contrast, JWT is just a token that passed with http request. JWT works well with mobile platforms. 
### Stateless, Easier Server Load
Like I said before, we don't need to store anything in the persistent layer like normal session does. JWT is stateless. The query to the persistent layer takes time, it definitely lower the performance. No extra query to the database make JWT a more efficient choice in some circumstances. 

## Downside of JWT

### More Bandwidth
Recall that to verify who you are, we only need to pass session_id to the server if we use traditional procedure. Sending data along with the JWT is more than just an id. It takes more bandwidth(resources). Does it worth if we are under large volume of requests?

### Invalid Token need something extra
Invalid a token is impossible if we don't save any relative to the persistent layer. Without saving any data, we can only wait until the token expires. It means if we login on two devices at the same time, we could not invalid the token if we only want one to stay alive. If someone use your valid token(before it expires), he can do anything he want by using your identity! 

However, if we save data to the persistent layer, it loses the advantage that JWT is stateless. First, we need to spend some storage space to save data. In addition, it will spend the time to query the database everytime we want to invalid a token. It sounds just like session...



## Conclusion
JWT is a light-weight, mobile friendly, stateless technology. In development we still need to make some trade off to implement all the features we want. Thank you for reading!

Happy coding again,

Tong

